import AWSAppSyncClient from 'aws-appsync';
import { awsConfig } from './aws-cred-exports';
import ExecutionEnvironment from 'exenv';
import fetch from 'node-fetch';

global.fetch = fetch;

export default class AwsAppSyncClient {
  static getClient() {
    if (AwsAppSyncClient._client) return AwsAppSyncClient._client;
    return AwsAppSyncClient.createClient();
  }
  static createClient() {
    AwsAppSyncClient._client = new AWSAppSyncClient({
      url: awsConfig.aws_appsync_graphqlEndpoint,
      region: awsConfig.aws_appsync_region,
      auth: {
        type: awsConfig.aws_appsync_authenticationType,
        apiKey: awsConfig.aws_appsync_apiKey
      },
      disableOffline: !ExecutionEnvironment.canUseDOM
    });
    return AwsAppSyncClient._client;
  }
}
