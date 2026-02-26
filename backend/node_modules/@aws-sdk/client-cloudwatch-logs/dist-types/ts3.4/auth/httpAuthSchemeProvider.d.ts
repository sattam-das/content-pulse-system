import {
  AwsSdkSigV4AuthInputConfig,
  AwsSdkSigV4AuthResolvedConfig,
  AwsSdkSigV4PreviouslyResolved,
} from "@aws-sdk/core";
import {
  HandlerExecutionContext,
  HttpAuthScheme,
  HttpAuthSchemeParameters,
  HttpAuthSchemeParametersProvider,
  HttpAuthSchemeProvider,
  Provider,
} from "@smithy/types";
import { CloudWatchLogsClientResolvedConfig } from "../CloudWatchLogsClient";
export interface CloudWatchLogsHttpAuthSchemeParameters
  extends HttpAuthSchemeParameters {
  region?: string;
}
export interface CloudWatchLogsHttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    CloudWatchLogsClientResolvedConfig,
    HandlerExecutionContext,
    CloudWatchLogsHttpAuthSchemeParameters,
    object
  > {}
export declare const defaultCloudWatchLogsHttpAuthSchemeParametersProvider: (
  config: CloudWatchLogsClientResolvedConfig,
  context: HandlerExecutionContext,
  input: object
) => Promise<CloudWatchLogsHttpAuthSchemeParameters>;
export interface CloudWatchLogsHttpAuthSchemeProvider
  extends HttpAuthSchemeProvider<CloudWatchLogsHttpAuthSchemeParameters> {}
export declare const defaultCloudWatchLogsHttpAuthSchemeProvider: CloudWatchLogsHttpAuthSchemeProvider;
export interface HttpAuthSchemeInputConfig extends AwsSdkSigV4AuthInputConfig {
  authSchemePreference?: string[] | Provider<string[]>;
  httpAuthSchemes?: HttpAuthScheme[];
  httpAuthSchemeProvider?: CloudWatchLogsHttpAuthSchemeProvider;
}
export interface HttpAuthSchemeResolvedConfig
  extends AwsSdkSigV4AuthResolvedConfig {
  readonly authSchemePreference: Provider<string[]>;
  readonly httpAuthSchemes: HttpAuthScheme[];
  readonly httpAuthSchemeProvider: CloudWatchLogsHttpAuthSchemeProvider;
}
export declare const resolveHttpAuthSchemeConfig: <T>(
  config: T & HttpAuthSchemeInputConfig & AwsSdkSigV4PreviouslyResolved
) => T & HttpAuthSchemeResolvedConfig;
