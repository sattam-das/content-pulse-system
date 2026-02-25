import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import { LambdaClient, InvokeCommand } from '@aws-sdk/client-lambda';
import axios from 'axios';
import { randomUUID } from 'crypto';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);
const lambdaClient = new LambdaClient({});

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const VIDEO_ANALYSES_TABLE = process.env.VIDEO_ANALYSES_TABLE;
const COMMENTS_TABLE = process.env.COMMENTS_TABLE;
const ANALYZE_LAMBDA_NAME = process.env.ANALYZE_LAMBDA_NAME;

function extractVideoId(url: string): string | null {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[7].length === 11) ? match[7] : null;
}

export const handler = async (event: any) => {
  try {
    // Check if this is a "worker" invocation (async, from ourselves)
    if (event.workerMode) {
      console.log('Worker mode: fetching comments for', event.analysisId);
      await fetchAndProcess(event.analysisId, event.videoId, event.videoUrl);
      return;
    }

    // Otherwise, this is an API Gateway request
    const body = JSON.parse(event.body || '{}');
    const { videoUrl } = body;

    if (!videoUrl) {
      return { statusCode: 400, headers: corsHeaders(), body: JSON.stringify({ error: 'videoUrl is required' }) };
    }

    const videoId = extractVideoId(videoUrl);
    if (!videoId) {
      return { statusCode: 400, headers: corsHeaders(), body: JSON.stringify({ error: 'Invalid YouTube URL' }) };
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

    // 2. Invoke ourselves asynchronously in "worker" mode
    const selfFunctionName = process.env.AWS_LAMBDA_FUNCTION_NAME;
    if (selfFunctionName) {
      await lambdaClient.send(new InvokeCommand({
        FunctionName: selfFunctionName,
        InvocationType: 'Event', // Async — don't wait for result
        Payload: Buffer.from(JSON.stringify({
          workerMode: true,
          analysisId,
          videoId,
          videoUrl,
        }))
      }));
      console.log(`Invoked worker mode for analysisId: ${analysisId}`);
    } else {
      console.warn('AWS_LAMBDA_FUNCTION_NAME not set, cannot self-invoke');
    }

    // 3. Return immediately
    return {
      statusCode: 202,
      headers: corsHeaders(),
      body: JSON.stringify({ analysisId, status: 'processing', message: 'Analysis started.' })
    };

  } catch (error) {
    console.error("Error in handler:", error);
    return { statusCode: 500, headers: corsHeaders(), body: JSON.stringify({ error: 'Internal server error' }) };
  }
};

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  };
}

async function fetchAndProcess(analysisId: string, videoId: string, videoUrl: string) {
  if (!YOUTUBE_API_KEY) {
    console.warn("No Youtube API key provided. Saving mock comments.");
    await saveMockComments(analysisId);
    await invokeAnalyzeLambda(analysisId);
    return;
  }

  let nextPageToken = '';
  let totalComments = 0;
  const MAX_COMMENTS = 2500;

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
        if (totalComments >= MAX_COMMENTS) break;
        
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
            ttl: Math.floor(Date.now() / 1000) + 24 * 60 * 60
          }
        }));
        totalComments++;

        // Fetch replies if this thread has any
        const replyCount = item.snippet.totalReplyCount || 0;
        if (replyCount > 0 && totalComments < MAX_COMMENTS) {
          try {
            let replyPageToken = '';
            do {
              const replyResponse: any = await axios.get(`https://www.googleapis.com/youtube/v3/comments`, {
                params: {
                  part: 'snippet',
                  parentId: item.id,
                  key: YOUTUBE_API_KEY,
                  maxResults: 100,
                  pageToken: replyPageToken || undefined
                }
              });

              const replies = replyResponse.data.items || [];
              for (const reply of replies) {
                if (totalComments >= MAX_COMMENTS) break;
                const replySnippet = reply.snippet;
                await docClient.send(new PutCommand({
                  TableName: COMMENTS_TABLE,
                  Item: {
                    analysisId,
                    commentId: `reply-${reply.id}`,
                    text: replySnippet.textOriginal,
                    author: replySnippet.authorDisplayName,
                    publishedAt: replySnippet.publishedAt,
                    likeCount: replySnippet.likeCount,
                    ttl: Math.floor(Date.now() / 1000) + 24 * 60 * 60
                  }
                }));
                totalComments++;
              }
              replyPageToken = replyResponse.data.nextPageToken || '';
            } while (replyPageToken && totalComments < MAX_COMMENTS);
          } catch (replyError) {
            console.warn(`Failed to fetch replies for thread ${item.id}:`, replyError);
          }
        }
      }

      nextPageToken = ytResponse.data.nextPageToken;

    } while (nextPageToken && totalComments < MAX_COMMENTS);

    console.log(`Fetched ${totalComments} comments for analysisId: ${analysisId}`);

    // Update comment count
    await docClient.send(new UpdateCommand({
      TableName: VIDEO_ANALYSES_TABLE,
      Key: { analysisId },
      UpdateExpression: 'set commentCount = :c',
      ExpressionAttributeValues: { ':c': totalComments }
    }));

    // Trigger Analyze Lambda
    await invokeAnalyzeLambda(analysisId);

  } catch (error) {
    console.error("Youtube API error:", error);
    await docClient.send(new UpdateCommand({
      TableName: VIDEO_ANALYSES_TABLE,
      Key: { analysisId },
      UpdateExpression: 'set #status = :s',
      ExpressionAttributeNames: { '#status': 'status' },
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

async function invokeAnalyzeLambda(analysisId: string) {
  if (!ANALYZE_LAMBDA_NAME) {
    console.warn('ANALYZE_LAMBDA_NAME not set, skipping invoke.');
    return;
  }
  try {
    await lambdaClient.send(new InvokeCommand({
      FunctionName: ANALYZE_LAMBDA_NAME,
      InvocationType: 'Event',
      Payload: Buffer.from(JSON.stringify({ analysisId }))
    }));
    console.log(`Invoked analyze lambda for analysisId: ${analysisId}`);
  } catch (error) {
    console.error('Failed to invoke analyze lambda:', error);
  }
}
