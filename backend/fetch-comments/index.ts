import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import axios from 'axios';
import { randomUUID } from 'crypto';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const VIDEO_ANALYSES_TABLE = process.env.VIDEO_ANALYSES_TABLE;
const COMMENTS_TABLE = process.env.COMMENTS_TABLE;
// In a real environment, we would trigger the analyze lambda asynchronously here
// const ANALYZE_LAMBDA_NAME = process.env.ANALYZE_LAMBDA_NAME;

function extractVideoId(url: string): string | null {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[7].length === 11) ? match[7] : null;
}

export const handler = async (event: any) => {
  try {
    const body = JSON.parse(event.body || '{}');
    const { videoUrl } = body;

    if (!videoUrl) {
      return { statusCode: 400, body: JSON.stringify({ error: 'videoUrl is required' }) };
    }

    const videoId = extractVideoId(videoUrl);
    if (!videoId) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Invalid YouTube URL' }) };
    }

    const analysisId = randomUUID();

    // 1. Create analysis record
    await docClient.send(new PutCommand({
      TableName: VIDEO_ANALYSES_TABLE,
      Item: {
        analysisId,
        videoId,
        videoUrl,
        status: 'processing',
        createdAt: new Date().toISOString(),
      }
    }));

    // Start background fetching & processing (simulated by not awaiting if we were triggering another lambda)
    // For local testing & simple prototype, we'll fetch and process inline OR assume this handler is long enough
    // In CDK we mapped the API to just trigger this. We might need a Step Function or async lambda invoke
    // but for now, let's fetch here since Lambda timeout is 30s.

    triggerAsyncProcessing(analysisId, videoId, videoUrl).catch(console.error);

    return {
      statusCode: 202,
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify({ analysisId, status: 'processing', message: 'Analysis started.' })
    };

  } catch (error) {
    console.error("Error in handler:", error);
    return { statusCode: 500, body: JSON.stringify({ error: 'Internal server error' }) };
  }
};

async function triggerAsyncProcessing(analysisId: string, videoId: string, videoUrl: string) {
    if (!YOUTUBE_API_KEY) {
        console.warn("No Youtube API key provided. Saving mock comments.");
        await saveMockComments(analysisId);
        await triggerAnalyzeLambdaMock(analysisId);
        return;
    }

    let nextPageToken = '';
    let totalComments = 0;
    const MAX_COMMENTS = 500; // Cap for prototype

    try {
        do {
            const ytResponse: any = await axios.get(`https://www.googleapis.com/youtube/v3/commentThreads`, {
                params: {
                    part: 'snippet',
                    videoId: videoId,
                    key: YOUTUBE_API_KEY,
                    maxResults: 100,
                    pageToken: nextPageToken || undefined
                }
            });

            const items = ytResponse.data.items || [];
            
            for (const item of items) {
                const comment = item.snippet.topLevelComment.snippet;
                await docClient.send(new PutCommand({
                    TableName: COMMENTS_TABLE,
                    Item: {
                        analysisId,
                        commentId: item.id,
                        text: comment.textOriginal,
                        author: comment.authorDisplayName,
                        publishedAt: comment.publishedAt,
                        likeCount: comment.likeCount,
                        ttl: Math.floor(Date.now() / 1000) + 24 * 60 * 60 // 24 hours expiry
                    }
                }));
                totalComments++;
            }
            
            nextPageToken = ytResponse.data.nextPageToken;

        } while (nextPageToken && totalComments < MAX_COMMENTS);

        // Update comment count
        await docClient.send(new UpdateCommand({
            TableName: VIDEO_ANALYSES_TABLE,
            Key: { analysisId },
            UpdateExpression: 'set commentCount = :c',
            ExpressionAttributeValues: { ':c': totalComments }
        }));

        // Trigger Analyze Lambda (Mocked logic below for now, need AWS SDK Lambda Client to invoke real one)
        // await invokeAnalyzeLambda(analysisId);

    } catch (error) {
        console.error("Youtube API error:", error);
         await docClient.send(new UpdateCommand({
            TableName: VIDEO_ANALYSES_TABLE,
            Key: { analysisId },
            UpdateExpression: 'set #status = :s',
            ExpressionAttributeNames: { '#status': 'status'},
            ExpressionAttributeValues: { ':s': 'failed' }
        }));
    }
}

async function saveMockComments(analysisId: string) {
    const mocks = [
        "How much does this cost?", "I didn't understand the part at 3:42, can you explain?", 
        "Is there a free tier for this service?", "Great video!", "At 3:42 the screen goes black, what happened?",
        "What's the pricing model like?", "The database setup at 2:15 was very helpful, thanks!",
        "Still confused about the database setup.", "How much is it?", "Cost?", "Where is the github link?"
    ];
    for (let i = 0; i < mocks.length; i++) {
        await docClient.send(new PutCommand({
            TableName: COMMENTS_TABLE,
            Item: {
                analysisId,
                commentId: `mock_comment_${i}`,
                text: mocks[i],
                author: `MockUser${i}`,
                publishedAt: new Date().toISOString(),
                likeCount: Math.floor(Math.random() * 10),
            }
        }));
    }
    await docClient.send(new UpdateCommand({
            TableName: VIDEO_ANALYSES_TABLE,
            Key: { analysisId },
            UpdateExpression: 'set commentCount = :c',
            ExpressionAttributeValues: { ':c': mocks.length }
    }));
}

async function triggerAnalyzeLambdaMock(analysisId: string) {
    // For local dev without Lambda invoke, we could just import and run it, or depend on DynamoDB streams
    // Production will use `new LambdaClient().send(new InvokeCommand({FunctionName: ANALYZE_LAMBDA_NAME, Payload: ...}))`
}
