import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, QueryCommand, PutCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import axios from 'axios';

const dbClient = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(dbClient);

const VIDEO_ANALYSES_TABLE = process.env.VIDEO_ANALYSES_TABLE;
const COMMENTS_TABLE = process.env.COMMENTS_TABLE;
const ANALYSIS_RESULTS_TABLE = process.env.ANALYSIS_RESULTS_TABLE;
const GROQ_API_KEY = process.env.GROQ_API_KEY;

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

        // 2. Sample comments to stay within AI token limits
        // Filter out very short comments, shuffle, take up to 800
        const meaningfulComments = comments
            .filter(c => c.text && c.text.length > 10)
            .sort(() => Math.random() - 0.5)
            .slice(0, 800);
        
        const commentTexts = meaningfulComments.map(c => c.text).join('\n---\n').slice(0, 15000);
        
        // 3. Ask Groq (Llama 3.1)
        const prompt = `Analyze these YouTube video comments (sampled from ${comments.length} total comments) and provide insights:

[COMMENTS DATA]
${commentTexts}

Please identify:
1. COMMON QUESTIONS: Group similar questions together and count frequency
2. CONFUSION POINTS: What specific things are people confused about? Look for timestamps.
3. TIMESTAMP MENTIONS: Extract any time references (like "at 3:42") and what people say about them
4. SENTIMENT ANALYSIS: Count how many comments are positive, negative, neutral, and questions. Also give an overall sentiment summary.

You MUST respond with ONLY valid JSON, no other text. Use this exact format:
{
  "commonQuestions": [
    {"question": "example question", "count": 5, "examples": ["example comment 1", "example comment 2"]}
  ],
  "confusionPoints": [
    {"issue": "example issue", "count": 3, "timestamp": "3:42"}
  ],
  "timelineMarkers": [
    {"timestamp": "2:15", "mentions": 5, "sentiment": "confusion"}
  ],
  "sentimentBreakdown": {
    "positive": 150,
    "negative": 30,
    "neutral": 200,
    "questions": 50,
    "overallSentiment": "mostly positive"
  }
}`;

        const groqResponse = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
            model: 'llama-3.1-8b-instant',
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
            max_tokens: 2000,
            temperature: 0.2,
            response_format: { type: 'json_object' },
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GROQ_API_KEY}`,
            },
            timeout: 50000,
        });

        const aiText = groqResponse.data.choices[0].message.content;
        console.log("Groq response received, length:", aiText.length);
        
        // 4. Parse JSON
        let parsedResults;
        try {
            const jsonMatch = aiText.match(/\{[\s\S]*\}/);
            parsedResults = jsonMatch ? JSON.parse(jsonMatch[0]) : JSON.parse(aiText);
        } catch (e) {
            console.error("Failed to parse AI response as JSON", aiText);
            throw new Error("Invalid AI Output format");
        }

        // 5. Save Results
        await docClient.send(new PutCommand({
            TableName: ANALYSIS_RESULTS_TABLE,
            Item: {
                analysisId,
                commonQuestions: parsedResults.commonQuestions || [],
                confusionPoints: parsedResults.confusionPoints || [],
                timelineMarkers: parsedResults.timelineMarkers || [],
                sentimentBreakdown: parsedResults.sentimentBreakdown || { positive: 0, negative: 0, neutral: 0, questions: 0, overallSentiment: 'unknown' },
                summary: "AI analysis complete"
            }
        }));

        await updateStatus(analysisId, 'completed');
        console.log(`Analysis completed for analysisId: ${analysisId}`);

    } catch (error) {
        console.error("Analysis Failed:", error);
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
