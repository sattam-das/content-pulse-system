import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import * as lambda from "aws-cdk-lib/aws-lambda-nodejs";
import { Runtime } from "aws-cdk-lib/aws-lambda";
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

    // 2. Lambda Functions (NodejsFunction auto-bundles TypeScript with esbuild)
    const analyzeCommentsLambda = new lambda.NodejsFunction(
      this,
      "AnalyzeCommentsFunction",
      {
        functionName: "AnalyzeCommentsFunction",
        runtime: Runtime.NODEJS_18_X,
        entry: path.join(__dirname, "../../backend/analyze-comments/index.ts"),
        handler: "handler",
        timeout: cdk.Duration.seconds(120),
        memorySize: 1024,
        environment: {
          VIDEO_ANALYSES_TABLE: videoAnalysesTable.tableName,
          COMMENTS_TABLE: commentsTable.tableName,
          ANALYSIS_RESULTS_TABLE: analysisResultsTable.tableName,
          GROQ_API_KEY: process.env.GROQ_API_KEY || "",
        },
        bundling: {
          externalModules: [], // Bundle all dependencies
        },
      },
    );

    const fetchCommentsLambda = new lambda.NodejsFunction(
      this,
      "FetchCommentsFunction",
      {
        runtime: Runtime.NODEJS_18_X,
        entry: path.join(__dirname, "../../backend/fetch-comments/index.ts"),
        handler: "handler",
        timeout: cdk.Duration.seconds(300),
        memorySize: 1024,
        environment: {
          VIDEO_ANALYSES_TABLE: videoAnalysesTable.tableName,
          COMMENTS_TABLE: commentsTable.tableName,
          YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY || "",
          ANALYZE_LAMBDA_NAME: analyzeCommentsLambda.functionName,
        },
        bundling: {
          externalModules: [],
        },
      },
    );

    const getStatusLambda = new lambda.NodejsFunction(
      this,
      "GetStatusFunction",
      {
        runtime: Runtime.NODEJS_18_X,
        entry: path.join(__dirname, "../../backend/get-status/index.ts"),
        handler: "handler",
        timeout: cdk.Duration.seconds(10),
        memorySize: 256,
        environment: {
          VIDEO_ANALYSES_TABLE: videoAnalysesTable.tableName,
          ANALYSIS_RESULTS_TABLE: analysisResultsTable.tableName,
          COMMENTS_TABLE: commentsTable.tableName,
        },
        bundling: {
          externalModules: [],
        },
      },
    );

    // Grant permissions
    videoAnalysesTable.grantReadWriteData(fetchCommentsLambda);
    commentsTable.grantReadWriteData(fetchCommentsLambda);

    videoAnalysesTable.grantReadWriteData(analyzeCommentsLambda);
    commentsTable.grantReadData(analyzeCommentsLambda);
    analysisResultsTable.grantReadWriteData(analyzeCommentsLambda);

    videoAnalysesTable.grantReadData(getStatusLambda);
    analysisResultsTable.grantReadData(getStatusLambda);
    commentsTable.grantReadData(getStatusLambda);

    // Grant fetch comments lambda permission to invoke itself (worker pattern) and the analyze lambda
    fetchCommentsLambda.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ["lambda:InvokeFunction"],
        resources: ["*"], // Allows invoking itself and the analyze lambda
      }),
    );

    // Note: Bedrock IAM policy removed — now using Gemini API via HTTP

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
    analysisIdResource.addMethod(
      "GET",
      new apigateway.LambdaIntegration(getStatusLambda),
    );

    // Outputs
    new cdk.CfnOutput(this, "ApiUrl", { value: api.url });
  }
}
