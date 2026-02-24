import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as iam from "aws-cdk-lib/aws-iam";
import * as path from "path";

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 1. DynamoDB Tables
    const videoAnalysesTable = new dynamodb.Table(this, "VideoAnalysesTable", {
      tableName: "video-analyses",
      partitionKey: { name: "analysisId", type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    const commentsTable = new dynamodb.Table(this, "CommentsTable", {
      tableName: "comments",
      partitionKey: { name: "analysisId", type: dynamodb.AttributeType.STRING },
      sortKey: { name: "commentId", type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      timeToLiveAttribute: "ttl", // For auto-deletion after 24 hours
    });

    const analysisResultsTable = new dynamodb.Table(
      this,
      "AnalysisResultsTable",
      {
        tableName: "analysis-results",
        partitionKey: {
          name: "analysisId",
          type: dynamodb.AttributeType.STRING,
        },
        billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
        removalPolicy: cdk.RemovalPolicy.DESTROY,
      },
    );

    // 2. Lambda Functions
    const fetchCommentsLambda = new lambda.Function(
      this,
      "FetchCommentsFunction",
      {
        runtime: lambda.Runtime.NODEJS_18_X,
        handler: "index.handler",
        code: lambda.Code.fromAsset(
          path.join(__dirname, "../../backend/fetch-comments"),
        ),
        timeout: cdk.Duration.seconds(30),
        memorySize: 512,
        environment: {
          VIDEO_ANALYSES_TABLE: videoAnalysesTable.tableName,
          COMMENTS_TABLE: commentsTable.tableName,
          YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY || "",
          // The fetch lambda will trigger the analyze lambda asynchronously to avoid blocking the API
          ANALYZE_LAMBDA_NAME: "AnalyzeCommentsFunction",
        },
      },
    );

    const analyzeCommentsLambda = new lambda.Function(
      this,
      "AnalyzeCommentsFunction",
      {
        functionName: "AnalyzeCommentsFunction",
        runtime: lambda.Runtime.NODEJS_18_X,
        handler: "index.handler",
        code: lambda.Code.fromAsset(
          path.join(__dirname, "../../backend/analyze-comments"),
        ),
        timeout: cdk.Duration.seconds(60),
        memorySize: 1024,
        environment: {
          VIDEO_ANALYSES_TABLE: videoAnalysesTable.tableName,
          COMMENTS_TABLE: commentsTable.tableName,
          ANALYSIS_RESULTS_TABLE: analysisResultsTable.tableName,
        },
      },
    );

    // Grant permissions
    videoAnalysesTable.grantReadWriteData(fetchCommentsLambda);
    commentsTable.grantReadWriteData(fetchCommentsLambda);

    videoAnalysesTable.grantReadWriteData(analyzeCommentsLambda);
    commentsTable.grantReadData(analyzeCommentsLambda);
    analysisResultsTable.grantReadWriteData(analyzeCommentsLambda);

    // Grant fetch comments lambda permission to invoke the analyze lambda
    analyzeCommentsLambda.grantInvoke(fetchCommentsLambda);

    // Grant Bedrock access to the analyze lambda
    analyzeCommentsLambda.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ["bedrock:InvokeModel"],
        resources: ["*"], // In production, restrict to specific model ARN
      }),
    );

    // 3. API Gateway
    const api = new apigateway.RestApi(this, "ContentPulseApi", {
      restApiName: "ContentPulse API",
      defaultCorsPreflightOptions: {
        allowOrigins: apigateway.Cors.ALL_ORIGINS,
        allowMethods: apigateway.Cors.ALL_METHODS,
      },
      deployOptions: {
        stageName: "prod",
        metricsEnabled: true,
      },
    });

    const analyzeResource = api.root.addResource("analyze");
    analyzeResource.addMethod(
      "POST",
      new apigateway.LambdaIntegration(fetchCommentsLambda),
    );

    const analysisIdResource = api.root
      .addResource("analysis")
      .addResource("{id}");
    // We reuse fetchCommentsLambda just to route the GET request, or we could create a third lambda.
    // Let's create a dedicated GET lambda or route it to analyzeCommentsLambda. Let's create a small lambda for GET status.
    const getStatusLambda = new lambda.Function(this, "GetStatusFunction", {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: "index.handler",
      code: lambda.Code.fromAsset(
        path.join(__dirname, "../../backend/get-status"),
      ),
      timeout: cdk.Duration.seconds(10),
      memorySize: 256,
      environment: {
        VIDEO_ANALYSES_TABLE: videoAnalysesTable.tableName,
        ANALYSIS_RESULTS_TABLE: analysisResultsTable.tableName,
      },
    });
    videoAnalysesTable.grantReadData(getStatusLambda);
    analysisResultsTable.grantReadData(getStatusLambda);

    analysisIdResource.addMethod(
      "GET",
      new apigateway.LambdaIntegration(getStatusLambda),
    );

    // Outputs
    new cdk.CfnOutput(this, "ApiUrl", { value: api.url });
  }
}
