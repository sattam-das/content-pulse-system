import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, QueryCommand, PutCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import axios from 'axios';
import { SentimentAnalyzer } from '../src/services/sentimentAnalyzer';
import { logError } from '../src/utils/errorSanitizer';

const dbClient = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(dbClient);

const VIDEO_ANALYSES_TABLE = process.env.VIDEO_ANALYSES_TABLE;
const COMMENTS_TABLE = process.env.COMMENTS_TABLE;
const ANALYSIS_RESULTS_TABLE = process.env.ANALYSIS_RESULTS_TABLE;
const GROQ_API_KEY = process.env.GROQ_API_KEY;
const USE_AWS_COMPREHEND = process.env.USE_AWS_COMPREHEND === 'true';
const AWS_REGION = process.env.AWS_REGION || 'us-east-1';

// Initialize AWS Comprehend Sentiment Analyzer (cached across Lambda invocations)
let sentimentAnalyzer: SentimentAnalyzer | null = null;

function getSentimentAnalyzer(): SentimentAnalyzer {
    if (!sentimentAnalyzer) {
        sentimentAnalyzer = new SentimentAnalyzer({
            region: AWS_REGION,
            maxRetries: 3,
            retryDelayMs: 1000,
            batchSize: 25,
            maxTextLength: 5000
        });
    }
    return sentimentAnalyzer;
}

export const handler = async (event: any) => {
    let analysisId;
    if (event.Records && event.Records[0].eventSource === 'aws:dynamodb') {
         console.log("DynamoDB Stream Trigger not fully implemented here.");
         return;
    } else {
         analysisId = event.analysisId;
    }

    if (!analysisId) {
        console.error("No analysisId provided to analyze-comments");
        return;
    }

    try {
        // 1. Fetch Comments
        const comments = await fetchAllComments(analysisId);
        if (comments.length === 0) {
             await updateStatus(analysisId, 'failed');
             return;
        }

        console.log(`Analyzing ${comments.length} comments for analysisId: ${analysisId}`);

        // 2. Sample comments for analysis
        // Filter out very short comments (≤10 chars), shuffle, take up to 2500
        const meaningfulComments = comments
            .filter(c => c.text && c.text.length > 10)
            .sort(() => Math.random() - 0.5)
            .slice(0, 2500);
        
        console.log(`Filtered to ${meaningfulComments.length} meaningful comments (removed ${comments.length - meaningfulComments.length} short comments)`);
        
        // Choose analysis method based on feature flag
        let parsedResults;
        if (USE_AWS_COMPREHEND) {
            console.log('Using hybrid approach: AWS Comprehend for sentiment + LLM for insights');
            parsedResults = await analyzeWithHybrid(meaningfulComments, meaningfulComments.length);
        } else {
            console.log('Using LLM (Groq) for full analysis');
            parsedResults = await analyzeWithLLM(meaningfulComments, meaningfulComments.length);
        }

        // 6. Save Results
        const resultsItem: any = {
            analysisId,
            commonQuestions: parsedResults.commonQuestions || [],
            confusionPoints: parsedResults.confusionPoints || [],
            timelineMarkers: parsedResults.timelineMarkers || [],
            sentimentBreakdown: parsedResults.sentimentBreakdown || { positive: 0, negative: 0, neutral: 0, questions: 0, overallSentiment: 'unknown' },
            executiveSummary: parsedResults.executiveSummary || '',
            engagementMetrics: parsedResults.engagementMetrics || { positiveFeedbackCount: 0, topPositiveComment: '', actionItems: [] },
            summary: parsedResults.executiveSummary || "AI analysis complete"
        };

        await docClient.send(new PutCommand({
            TableName: ANALYSIS_RESULTS_TABLE,
            Item: resultsItem
        }));

        await updateStatus(analysisId, 'completed');
        console.log(`Analysis completed for analysisId: ${analysisId}`);

    } catch (error) {
        logError("Analysis Failed", error);
        await updateStatus(analysisId, 'failed');
    }
};

async function fetchAllComments(analysisId: string) {
    let lastEvaluatedKey = undefined;
    const allComments = [];

    do {
        const result: any = await docClient.send(new QueryCommand({
            TableName: COMMENTS_TABLE,
            KeyConditionExpression: 'analysisId = :aid',
            ExpressionAttributeValues: {
                ':aid': analysisId
            },
            ExclusiveStartKey: lastEvaluatedKey
        }));

        if (result.Items) {
            allComments.push(...result.Items);
        }
        lastEvaluatedKey = result.LastEvaluatedKey;
    } while (lastEvaluatedKey);

    return allComments;
}

async function updateStatus(analysisId: string, status: string) {
     await docClient.send(new UpdateCommand({
        TableName: VIDEO_ANALYSES_TABLE,
        Key: { analysisId },
        UpdateExpression: 'set #status = :s, completedAt = :c',
        ExpressionAttributeNames: { '#status': 'status'},
        ExpressionAttributeValues: { ':s': status, ':c': new Date().toISOString() }
    }));
}

/**
 * Hybrid analysis: AWS Comprehend for sentiment + LLM for insights.
 * 
 * @param meaningfulComments - Filtered comments to analyze
 * @param totalCommentCount - Total number of comments in the video
 * @returns Parsed analysis results combining Comprehend sentiment with LLM insights
 */
async function analyzeWithHybrid(meaningfulComments: any[], totalCommentCount: number) {
    const analyzer = getSentimentAnalyzer();
    const commentTexts = meaningfulComments.map(c => c.text);
    
    // Step 1: Analyze sentiment using AWS Comprehend
    console.log('Step 1: Running AWS Comprehend sentiment analysis...');
    const sentimentResult = await analyzer.analyzeComments(commentTexts);
    
    // Step 2: Prepare data for LLM with sentiment annotations
    const annotatedComments = meaningfulComments.map((c, i) => {
        const sentiment = sentimentResult.comments[i].sentiment;
        return `[${sentiment.toUpperCase()}] ${c.text}`;
    }).join('\n---\n').slice(0, 8000);
    
    // Step 3: Use LLM for deeper insights with sentiment context
    console.log('Step 2: Running LLM analysis for insights...');
    const llmInsights = await getLLMInsights(
        annotatedComments,
        sentimentResult.sentimentBreakdown,
        totalCommentCount,
        meaningfulComments.length
    );
    
    // Step 4: Combine results
    return {
        commonQuestions: llmInsights.commonQuestions || [],
        confusionPoints: llmInsights.confusionPoints || [],
        timelineMarkers: llmInsights.timelineMarkers || [],
        sentimentBreakdown: {
            positive: sentimentResult.sentimentBreakdown.positive,
            negative: sentimentResult.sentimentBreakdown.negative,
            neutral: sentimentResult.sentimentBreakdown.neutral,
            questions: sentimentResult.sentimentBreakdown.question,
            overallSentiment: sentimentResult.overallSentiment
        },
        executiveSummary: llmInsights.executiveSummary || '',
        engagementMetrics: llmInsights.engagementMetrics || { positiveFeedbackCount: 0, topPositiveComment: '', actionItems: [] }
    };
}

/**
 * Gets insights from LLM using sentiment-annotated comments.
 */
async function getLLMInsights(annotatedComments: string, sentimentBreakdown: any, totalComments: number, analyzedComments: number) {
    // Calculate percentages from Comprehend data
    const total = sentimentBreakdown.positive + sentimentBreakdown.negative + sentimentBreakdown.neutral + sentimentBreakdown.question;
    const positivePercent = total > 0 ? Math.round((sentimentBreakdown.positive / total) * 100) : 0;
    const negativePercent = total > 0 ? Math.round((sentimentBreakdown.negative / total) * 100) : 0;
    const neutralPercent = total > 0 ? Math.round((sentimentBreakdown.neutral / total) * 100) : 0;
    const questionPercent = total > 0 ? Math.round((sentimentBreakdown.question / total) * 100) : 0;
    
    const prompt = `You are analyzing YouTube video comments. AWS Comprehend has already performed sentiment analysis. Your job is to provide deeper insights.

SENTIMENT ANALYSIS (from AWS Comprehend - DO NOT RECALCULATE):
- Total analyzed: ${analyzedComments} comments
- Positive: ${sentimentBreakdown.positive} comments (${positivePercent}%)
- Negative: ${sentimentBreakdown.negative} comments (${negativePercent}%)
- Neutral: ${sentimentBreakdown.neutral} comments (${neutralPercent}%)
- Questions: ${sentimentBreakdown.question} comments (${questionPercent}%)
- Overall sentiment: ${sentimentBreakdown.overallSentiment || 'Mixed'}

ANNOTATED COMMENTS (each comment is prefixed with its sentiment from Comprehend):
${annotatedComments}

CRITICAL INSTRUCTIONS:
1. DO NOT recalculate sentiment percentages - use the exact numbers provided above
2. Your executive summary MUST use the exact percentages: ${positivePercent}% positive, ${negativePercent}% negative
3. Focus on identifying patterns, themes, and actionable insights

Please analyze and provide:
1. COMMON QUESTIONS: Group similar questions together (look for [QUESTION] tags)
2. CONFUSION POINTS: What specific things are people confused about? Look for timestamps and confusion patterns
3. TIMESTAMP MENTIONS: Extract any time references (like "at 3:42") and what people say about them
4. EXECUTIVE SUMMARY: Write a 2-3 sentence summary that:
   - States "Analyzed ${analyzedComments} comments"
   - Uses EXACTLY these percentages: ${positivePercent}% positive, ${negativePercent}% negative
   - Mentions ${sentimentBreakdown.question} questions identified
   - Describes key themes and audience reception
5. ENGAGEMENT METRICS: Identify positive feedback (look for [POSITIVE] tags), find the most impactful positive comment, and suggest actionable items

You MUST respond with ONLY valid JSON, no other text. Use this exact structure:
{
  "commonQuestions": [
    {"question": "string", "count": 0, "examples": ["string"]}
  ],
  "confusionPoints": [
    {"issue": "string", "count": 0, "timestamp": "string"}
  ],
  "timelineMarkers": [
    {"timestamp": "string", "mentions": 0, "sentiment": "positive|negative|confusion|neutral"}
  ],
  "executiveSummary": "string (MUST start with 'Analyzed ${analyzedComments} comments. ${positivePercent}% positive, ${negativePercent}% negative.')",
  "engagementMetrics": {
    "positiveFeedbackCount": ${sentimentBreakdown.positive},
    "topPositiveComment": "string",
    "actionItems": ["string"]
  }
}`;

    let groqResponse;
    let retries = 0;
    const maxRetries = 3;
    const models = ['llama-3.3-70b-versatile', 'llama-3.1-8b-instant', 'gemma2-9b-it'];

    while (retries < maxRetries) {
        try {
            const selectedModel = models[retries % models.length];
            console.log(`LLM attempt ${retries + 1}: Using model ${selectedModel}`);
            
            groqResponse = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
                model: selectedModel,
                messages: [
                    {
                        role: 'system',
                        content: 'You are a YouTube comment analysis assistant. AWS Comprehend provides sentiment data, and you provide deeper insights. You MUST respond with ONLY valid JSON, no markdown, no code fences, no explanation.'
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                max_tokens: 1500,
                temperature: 0.3,
                response_format: { type: 'json_object' },
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${GROQ_API_KEY}`,
                },
                timeout: 50000,
            });
            break;
        } catch (err: any) {
            const status = err.response?.status;
            const isRetryable = (status === 429 || status === 400) && retries < maxRetries - 1;
            if (isRetryable) {
                console.warn(`LLM error (status ${status}). Switching to next model (retry ${retries + 1})...`);
                let waitTime = status === 429 ? 5000 : 500;
                if (status === 429) {
                    const retryAfter = err.response.headers['retry-after'];
                    const delayStr = err.response.headers['x-ratelimit-reset-tokens'];
                    if (retryAfter) {
                        waitTime = parseInt(retryAfter) * 1000;
                    } else if (delayStr && delayStr.endsWith('s')) {
                        waitTime = parseFloat(delayStr.replace('s', '')) * 1000;
                    }
                }
                await new Promise(r => setTimeout(r, Math.min(waitTime, 10000)));
                retries++;
            } else {
                logError('LLM API error', err);
                throw err;
            }
        }
    }

    if (!groqResponse) {
        throw new Error("Failed to get response from LLM after retries");
    }

    const aiText = groqResponse.data.choices[0].message.content;
    console.log("LLM response received, length:", aiText.length);
    
    try {
        const jsonMatch = aiText.match(/\{[\s\S]*\}/);
        const jsonString = jsonMatch ? jsonMatch[0] : aiText;
        return JSON.parse(jsonString);
    } catch (e) {
        console.error("Failed to parse LLM response as JSON", aiText);
        throw new Error("Invalid LLM output format");
    }
}

/**
 * Analyzes comments using LLM (Groq) - original implementation.
 */
async function analyzeWithLLM(meaningfulComments: any[], totalCommentCount: number) {
    const commentTexts = meaningfulComments.map(c => c.text).join('\n---\n').slice(0, 5000);
    
    const prompt = `Analyze these YouTube video comments (sampled from ${totalCommentCount} total comments) and provide insights:

COMMENTS DATA:
${commentTexts}

Please identify:
1. COMMON QUESTIONS: Group similar questions together and count frequency
2. CONFUSION POINTS: What specific things are people confused about? Look for timestamps.
3. TIMESTAMP MENTIONS: Extract any time references (like "at 3:42") and what people say about them
4. SENTIMENT ANALYSIS: Count how many comments are positive, negative, neutral, and questions. Also give an overall sentiment summary.
5. EXECUTIVE SUMMARY: Write a 2-3 sentence summary of the overall audience reception, key themes, and notable patterns in the comments.
6. ENGAGEMENT METRICS: Count how many comments contain praise/positive feedback that could be pinned, and identify the most liked or impactful positive comment.

You MUST respond with ONLY valid JSON, no other text. 
CRITICAL INSTRUCTION: You MUST calculate ACTUAL counts from the provided comments. DO NOT output the placeholder values (0, "string") from the schema below. If there are no items for a list, return an empty array []. Use this exact JSON structure:
{
  "commonQuestions": [
    {"question": "string", "count": 0, "examples": ["string"]}
  ],
  "confusionPoints": [
    {"issue": "string", "count": 0, "timestamp": "string"}
  ],
  "timelineMarkers": [
    {"timestamp": "string", "mentions": 0, "sentiment": "positive|negative|confusion|neutral"}
  ],
  "sentimentBreakdown": {
    "positive": 0,
    "negative": 0,
    "neutral": 0,
    "questions": 0,
    "overallSentiment": "string"
  },
  "executiveSummary": "string",
  "engagementMetrics": {
    "positiveFeedbackCount": 0,
    "topPositiveComment": "string",
    "actionItems": ["string"]
  }
}`;

    let groqResponse;
    let retries = 0;
    const maxRetries = 3;
    const models = ['llama-3.3-70b-versatile', 'llama-3.1-8b-instant', 'gemma2-9b-it'];

    while (retries < maxRetries) {
        try {
            const selectedModel = models[retries % models.length];
            console.log(`Attempt ${retries + 1}: Using model ${selectedModel}`);
            
            groqResponse = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
                model: selectedModel,
                messages: [
                    {
                        role: 'system',
                        content: 'You are a YouTube comment analysis engine. You MUST respond with ONLY valid JSON, no markdown, no code fences, no explanation.'
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                max_tokens: 1000,
                temperature: 0.2,
                response_format: { type: 'json_object' },
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${GROQ_API_KEY}`,
                },
                timeout: 50000,
            });
            break;
        } catch (err: any) {
            const status = err.response?.status;
            const isRetryable = (status === 429 || status === 400) && retries < maxRetries - 1;
            if (isRetryable) {
                console.warn(`Model error (status ${status}). Switching to next model (retry ${retries + 1})...`);
                let waitTime = status === 429 ? 5000 : 500;
                if (status === 429) {
                    const retryAfter = err.response.headers['retry-after'];
                    const delayStr = err.response.headers['x-ratelimit-reset-tokens'];
                    if (retryAfter) {
                        waitTime = parseInt(retryAfter) * 1000;
                    } else if (delayStr && delayStr.endsWith('s')) {
                        waitTime = parseFloat(delayStr.replace('s', '')) * 1000;
                    }
                }
                await new Promise(r => setTimeout(r, Math.min(waitTime, 10000)));
                retries++;
            } else {
                console.error((err as any).response?.data || err);
                throw err;
            }
        }
    }

    if (!groqResponse) {
        throw new Error("Failed to get response from Groq API after retries");
    }

    const aiText = groqResponse.data.choices[0].message.content;
    console.log("Groq response received, length:", aiText.length);
    
    try {
        const jsonMatch = aiText.match(/\{[\s\S]*\}/);
        const jsonString = jsonMatch ? jsonMatch[0] : aiText;
        return JSON.parse(jsonString);
    } catch (e) {
        console.error("Failed to parse AI response as JSON", aiText);
        throw new Error("Invalid AI Output format");
    }
}


