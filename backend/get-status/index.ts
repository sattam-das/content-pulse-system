import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand, QueryCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const VIDEO_ANALYSES_TABLE = process.env.VIDEO_ANALYSES_TABLE;
const ANALYSIS_RESULTS_TABLE = process.env.ANALYSIS_RESULTS_TABLE;
const COMMENTS_TABLE = process.env.COMMENTS_TABLE;

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

        const analysisData: any = {
            analysisId: statusResult.Item.analysisId,
            videoId: statusResult.Item.videoId,
            status: statusResult.Item.status,
            commentCount: statusResult.Item.commentCount || 0,
            comments: [],
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
                    sentimentBreakdown: results.Item.sentimentBreakdown || null,
                    executiveSummary: results.Item.executiveSummary || '',
                    engagementMetrics: results.Item.engagementMetrics || null,
                    summary: results.Item.summary
                } as any;
            }

            // 3. Fetch individual comments (limit 200 for the browser)
            try {
                const commentsResult = await docClient.send(new QueryCommand({
                    TableName: COMMENTS_TABLE,
                    KeyConditionExpression: 'analysisId = :aid',
                    ExpressionAttributeValues: { ':aid': analysisId },
                    Limit: 200
                }));
                analysisData.comments = (commentsResult.Items || []).map((item: any) => ({
                    commentId: item.commentId,
                    text: item.text,
                    author: item.author,
                    publishedAt: item.publishedAt,
                    likeCount: item.likeCount || 0
                }));
            } catch (commentError) {
                console.warn('Failed to fetch comments:', commentError);
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
