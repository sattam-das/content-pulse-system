import { CloudWatchLogsClient, FilterLogEventsCommand } from "@aws-sdk/client-cloudwatch-logs";
import fs from "fs";

async function fetchLogs() {
  const client = new CloudWatchLogsClient({ region: "us-east-1" });
  const command = new FilterLogEventsCommand({
    logGroupName: "/aws/lambda/AnalyzeCommentsFunction",
    startTime: Date.now() - 30 * 60 * 1000,
  });

  try {
    const data = await client.send(command);
    if (data.events) {
      const logs = data.events.map(e => e.message).join("\n");
      fs.writeFileSync("logs.txt", logs);
      console.log("Logs saved to logs.txt");
    } else {
      console.log("No logs found.");
    }
  } catch (error) {
    console.error("Error fetching logs:", error);
  }
}

fetchLogs();
