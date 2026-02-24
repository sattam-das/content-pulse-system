import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, QueryCommand, PutCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime';

const dbClient = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(dbClient);
const bedrockClient = new BedrockRuntimeClient({ region: process.env.AWS_REGION || 'us-east-1' });

const VIDEO_ANALYSES_TABLE = process.env.VIDEO_ANALYSES_TABLE;
const COMMENTS_TABLE = process.env.COMMENTS_TABLE;
const ANALYSIS_RESULTS_TABLE = process.env.ANALYSIS_RESULTS_TABLE;

export const handler = async (event: any) => {
    // This could be invoked by EventBridge, SQS, or directly by the fetch lambda
    // Assuming direct invocation with analysisId in the payload for now
    
    let analysisId;
    if (event.Records && event.Records[0].eventSource === 'aws:dynamodb') {
         // If triggered by purely dynamoDB streams (optional)
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

        // 2. Format for AI
        const commentTexts = comments.map(c => c.text).join('\n---\n');
        
        // 3. Ask Bedrock
        const prompt = `
Analyze these YouTube video comments and provide insights:

[COMMENTS DATA]
${commentTexts.slice(0, 15000)} // truncate to avoid token limits on prototype

Please identify:
1. COMMON QUESTIONS: Group similar questions together and count frequency
2. CONFUSION POINTS: What specific things are people confused about? Look for timestamps.
3. TIMESTAMP MENTIONS: Extract any time references (like "at 3:42") and what people say about them

Format response STRICTLY as JSON:
{
  "commonQuestions": [
    {"question": "How much does this cost?", "count": 12, "examples": ["..."]}
  ],
  "confusionPoints": [
    {"issue": "Database setup unclear", "count": 15, "timestamp": "3:42"}
  ],
  "timelineMarkers": [
    {"timestamp": "2:15", "mentions": 15, "sentiment": "confusion"}
  ]
}
`;

        const command = new InvokeModelCommand({
            modelId: 'anthropic.claude-3-haiku-20240307-v1:0', // Lightweight fast model
            contentType: 'application/json',
            accept: 'application/json',
            body: JSON.stringify({
                anthropic_version: "bedrock-2023-05-31",
                max_tokens: 1000,
                messages: [
                    {
                        role: "user",
                        content: prompt
                    }
                ]
            })
        });

        const response = await bedrockClient.send(command);
        const responseBody = JSON.parse(new TextDecoder().decode(response.body));
        const aiText = responseBody.content[0].text;
        
        // 4. Parse JSON
        let parsedResults;
        try {
            // Find JSON in the response (in case Claude added conversational text)
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
                summary: "AI analysis complete"
            }
        }));

        await updateStatus(analysisId, 'completed');

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
