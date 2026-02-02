# ContentPulse - System Design Document

## 1. Architecture Overview

ContentPulse is built as a serverless web application using AWS services. The system follows a simple three-stage pipeline: input → processing → results display.

### 1.1 High-Level Architecture

```
[Frontend Web App] → [API Gateway] → [Lambda Functions] → [AI Analysis] → [Database] → [Results Display]
```

### 1.2 Core Components

- **Frontend**: React-based web application hosted on AWS Amplify
- **API Layer**: AWS API Gateway for request routing
- **Processing Engine**: AWS Lambda functions for comment fetching and analysis
- **AI Analysis**: Amazon Bedrock for natural language processing
- **Data Storage**: DynamoDB for comment and analysis data
- **Hosting**: AWS Amplify for static web hosting

## 2. System Flow

### 2.1 User Journey Flow

1. **Input Stage**: User pastes YouTube URL → Frontend validates URL → Sends to API
2. **Processing Stage**: Lambda fetches comments → Stores in DB → Triggers AI analysis → Stores results
3. **Results Stage**: Frontend polls for results → Displays dashboard with insights

### 2.2 Data Flow Diagram

```
YouTube URL Input
       ↓
   URL Validation
       ↓
   API Gateway → Lambda (Fetch Comments)
       ↓
   YouTube API → DynamoDB (Store Comments)
       ↓
   Lambda (AI Analysis) → Amazon Bedrock
       ↓
   Analysis Results → DynamoDB (Store Results)
       ↓
   Frontend Polling → Results Dashboard
```

## 3. Frontend Design

### 3.1 Screen Architecture

#### Screen 1: Input Screen
- **Purpose**: Capture YouTube URL and initiate analysis
- **Components**:
  - URL input field with validation
  - "Analyze Comments" button
  - Basic error handling display
- **Validation**: Client-side URL format checking before API call

#### Screen 2: Loading Screen
- **Purpose**: Provide feedback during processing
- **Components**:
  - Progress indicators
  - Status messages ("Reading 247 comments...", "Finding patterns...")
  - Estimated time remaining
- **Behavior**: Polls backend every 2 seconds for status updates

#### Screen 3: Results Dashboard
- **Purpose**: Display actionable insights
- **Layout**:
  ```
  [Video Info Header]
  
  [Common Questions Section]
  - Grouped questions with frequency counts
  
  [Confusion Points Section]  
  - Specific issues with timestamps
  
  [Timeline Visualization]
  - Video timeline with comment activity markers
  ```

### 3.2 Frontend Technology Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **State Management**: React hooks (useState, useEffect)
- **HTTP Client**: Axios for API communication
- **Hosting**: AWS Amplify with automatic deployments

## 4. Backend Design

### 4.1 API Endpoints

#### POST /analyze
- **Purpose**: Initiate comment analysis for a YouTube video
- **Input**: `{ "videoUrl": "https://youtube.com/watch?v=..." }`
- **Output**: `{ "analysisId": "uuid", "status": "processing" }`
- **Triggers**: Lambda function for comment fetching

#### GET /analysis/{analysisId}
- **Purpose**: Retrieve analysis results or status
- **Output**: Analysis results or processing status
- **Behavior**: Returns results when ready, status when processing

### 4.2 Lambda Functions

#### Function 1: Comment Fetcher (`fetch-comments`)
- **Trigger**: API Gateway POST request
- **Purpose**: Fetch comments from YouTube API
- **Process**:
  1. Extract video ID from URL
  2. Call YouTube Data API v3
  3. Retrieve all comments (handle pagination)
  4. Store raw comments in DynamoDB
  5. Trigger AI analysis function
- **Runtime**: Node.js 18
- **Timeout**: 30 seconds
- **Memory**: 512 MB

#### Function 2: AI Analyzer (`analyze-comments`)
- **Trigger**: DynamoDB stream or direct invocation
- **Purpose**: Process comments using Amazon Bedrock
- **Process**:
  1. Retrieve comments from DynamoDB
  2. Format comments for AI analysis
  3. Send to Amazon Bedrock with analysis prompt
  4. Parse AI response
  5. Store structured results in DynamoDB
- **Runtime**: Node.js 18
- **Timeout**: 60 seconds
- **Memory**: 1024 MB

### 4.3 AI Analysis Prompt

```
Analyze these YouTube video comments and provide insights:

[COMMENTS DATA]

Please identify:
1. COMMON QUESTIONS: Group similar questions together and count frequency
2. CONFUSION POINTS: What specific things are people confused about?
3. TIMESTAMP MENTIONS: Extract any time references (like "at 3:42") and what people say about them

Format response as JSON:
{
  "commonQuestions": [
    {"question": "How much does this cost?", "count": 12, "examples": ["..."]}
  ],
  "confusionPoints": [
    {"issue": "Database setup unclear", "count": 15, "timestamp": "3:42"}
  ],
  "timelineMarkers": [
    {"timestamp": "2:15", "mentions": 15, "sentiment": "confusion"},
    {"timestamp": "5:30", "mentions": 12, "sentiment": "positive"}
  ]
}
```

## 5. Data Design

### 5.1 DynamoDB Tables

#### Table: `video-analyses`
- **Partition Key**: `analysisId` (UUID)
- **Attributes**:
  - `videoId`: YouTube video ID
  - `videoUrl`: Original URL
  - `status`: processing | completed | failed
  - `createdAt`: Timestamp
  - `completedAt`: Timestamp
  - `commentCount`: Number of comments fetched

#### Table: `comments`
- **Partition Key**: `analysisId`
- **Sort Key**: `commentId`
- **Attributes**:
  - `text`: Comment content
  - `author`: Comment author
  - `publishedAt`: Comment timestamp
  - `likeCount`: Number of likes

#### Table: `analysis-results`
- **Partition Key**: `analysisId`
- **Attributes**:
  - `commonQuestions`: JSON array of grouped questions
  - `confusionPoints`: JSON array of confusion points
  - `timelineMarkers`: JSON array of timeline data
  - `summary`: Overall analysis summary

### 5.2 Data Retention
- Comments: Deleted after 24 hours (privacy consideration)
- Analysis results: Retained for 7 days for demo purposes
- Video metadata: Retained for analytics

## 6. Integration Design

### 6.1 YouTube Data API Integration

- **API Version**: YouTube Data API v3
- **Required Scopes**: Read public video comments
- **Rate Limits**: 10,000 units per day (sufficient for prototype)
- **Error Handling**: Graceful degradation for private/restricted videos

### 6.2 Amazon Bedrock Integration

- **Model**: Claude 3 Haiku (cost-effective for prototype)
- **Input Format**: Structured comment data with analysis instructions
- **Output Format**: JSON with categorized insights
- **Error Handling**: Fallback to basic text analysis if AI fails

## 7. Security Considerations

### 7.1 API Security
- API Gateway with throttling (100 requests per minute)
- Input validation for YouTube URLs
- No authentication required for prototype (public demo)

### 7.2 Data Privacy
- Only public comments are processed
- No personal data storage beyond public comment content
- Automatic data cleanup after analysis

### 7.3 AWS Security
- Lambda functions with minimal IAM permissions
- DynamoDB with encryption at rest
- API Gateway with CORS configuration

## 8. Deployment Architecture

### 8.1 Infrastructure as Code
- AWS CDK for infrastructure deployment
- Separate stacks for development and production
- Automated deployment pipeline

### 8.2 Environment Configuration
- **Development**: Single region (us-east-1)
- **Production**: Single region with monitoring
- **Configuration**: Environment variables for API keys and endpoints

## 9. Monitoring and Observability

### 9.1 Logging
- CloudWatch logs for all Lambda functions
- API Gateway access logs
- Error tracking and alerting

### 9.2 Metrics
- Processing time per analysis
- Success/failure rates
- API usage patterns

## 10. Performance Optimization

### 10.1 Caching Strategy
- No caching for prototype (real-time analysis focus)
- Future: Cache analysis results for identical videos

### 10.2 Scalability Considerations
- Lambda auto-scaling handles concurrent requests
- DynamoDB on-demand pricing for variable load
- API Gateway handles traffic spikes

## 11. Testing Strategy

### 11.1 Unit Testing
- Lambda function logic testing
- Frontend component testing
- API endpoint testing

### 11.2 Integration Testing
- End-to-end workflow testing
- YouTube API integration testing
- Amazon Bedrock integration testing

### 11.3 Property-Based Testing Framework
- **Framework**: fast-check for JavaScript/TypeScript
- **Focus Areas**: 
  - Comment parsing and grouping logic
  - Timestamp extraction accuracy
  - Data validation and sanitization

## 12. Correctness Properties

### 12.1 Comment Processing Properties
1. **Completeness**: All fetched comments must be processed
2. **Accuracy**: Timestamp extraction must be 90%+ accurate
3. **Consistency**: Similar questions must be grouped together
4. **Reliability**: System must handle malformed comment data gracefully

### 12.2 Analysis Quality Properties
1. **Relevance**: Identified patterns must be meaningful
2. **Frequency**: Question grouping must reflect actual comment frequency
3. **Timeline Accuracy**: Timestamp markers must correspond to actual video times

## 13. Future Enhancements (Post-Hackathon)

- Real-time comment monitoring
- Multi-platform support (Instagram, Twitter)
- Advanced sentiment analysis
- Creator response suggestions
- Analytics dashboard with trends