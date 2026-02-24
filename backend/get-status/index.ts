import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const VIDEO_ANALYSES_TABLE = process.env.VIDEO_ANALYSES_TABLE;
const ANALYSIS_RESULTS_TABLE = process.env.ANALYSIS_RESULTS_TABLE;

export const handler = async (event: any) => {
    try {
        const analysisId = event.pathParameters?.id;

        if (!analysisId) {
            return { statusCode: 400, body: JSON.stringify({ error: 'Missing analysisId' }) };
        }

        // 1. Get Status
        const statusResult = await docClient.send(new GetCommand({
            TableName: VIDEO_ANALYSES_TABLE,
            Key: { analysisId }
        }));

        if (!statusResult.Item) {
            return { statusCode: 404, body: JSON.stringify({ error: 'Analysis not found' }) };
        }

        const analysisData = {
            analysisId: statusResult.Item.analysisId,
            videoId: statusResult.Item.videoId,
            status: statusResult.Item.status,
            commentCount: statusResult.Item.commentCount || 0,
            results: null
        };

        // 2. Get Results if completed
        if (analysisData.status === 'completed') {
             const results = await docClient.send(new GetCommand({
                TableName: ANALYSIS_RESULTS_TABLE,
                Key: { analysisId }
            }));
            
            if (results.Item) {
                analysisData.results = {
                    commonQuestions: results.Item.commonQuestions || [],
                    confusionPoints: results.Item.confusionPoints || [],
                    timelineMarkers: results.Item.timelineMarkers || [],
                    summary: results.Item.summary
                } as any;
            }
        }

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
            },
            body: JSON.stringify(analysisData)
        };

    } catch (error) {
        console.error("Error in get-status handler", error);
        return { statusCode: 500, body: JSON.stringify({ error: 'Internal server error' }) };
    }
};
