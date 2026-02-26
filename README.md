# ContentPulse - YouTube Comment Analysis System

> AI-powered insights for YouTube content creators.

## 🌟 Purpose

ContentPulse helps YouTube content creators understand what their audience is actually saying in the comments. The system automatically reads comments, identifies patterns (such as common questions and confusion points), and provides actionable insights in plain English, allowing creators to respond effectively while content is still trending.

## 🚀 Key Features

- **Automated Comment Fetching**: Retrieves all public comments from a specified YouTube video.
- **AI-Powered Analysis**: Uses Amazon Bedrock to group similar questions, identify confusion points, and extract timestamp references.
- **Real-Time Processing**: Provides clear feedback and progress updates during the extraction and analysis phases.
- **Actionable Results Dashboard**: Displays a clean, easy-to-read summary of insights and user sentiment.

## 🏗 System Architecture

ContentPulse is built as a serverless web application using AWS services:

- **Frontend**: A responsive web application built with React 19, TypeScript, Vite, and Tailwind CSS v4. Hosted on AWS Amplify.
- **API Layer**: AWS API Gateway routes incoming requests.
- **Processing Engine**: AWS Lambda functions handle fetching comments from YouTube (`fetch-comments`) and running AI analysis (`analyze-comments`).
- **AI Analysis**: Amazon Bedrock utilizes the Claude 3 Haiku model for fast, natural language processing over comment text.
- **Data Storage**: Amazon DynamoDB stores comment data and analysis results.

## 🛠 Local Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- NPM or Yarn
- AWS CLI (configured for backend deployment)
- AWS CDK (`npm install -g aws-cdk`)

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd content-pulse-system
```

### 2. Frontend Setup

```bash
cd frontend
npm install
```

Start the local development server:

```bash
npm run dev
```

### 3. Backend / Infrastructure Setup (AWS CDK)

Ensure you have set up your AWS credentials.

```bash
cd infra
npm install
```

Deploy the infrastructure to AWS:

```bash
npx cdk deploy
```

## 📂 Project Structure

- `/frontend` - Contains the React/Vite front-end application code.
- `/backend` - Contains the source code for the AWS Lambda functions (e.g., `analyze-comments`).
- `/infra` - Contains the AWS CDK infrastructure definitions.

## 🛠 Built With

- **React** & **Tailwind CSS** - Frontend UI
- **AWS Lambda** & **API Gateway** - Serverless backend
- **Amazon DynamoDB** - Database
- **Amazon Bedrock** - AI Processing
- **AWS Amplify** - Hosting
