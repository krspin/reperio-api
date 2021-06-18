import type { AWS } from '@serverless/typescript';

import hello from '@functions/hello';
import recipes from '@functions/recipes';

const config = {
  "user": "shehbaj",
  "password": "",
  "host": "localhost",
  "database": "reperiodb",
  "port": "3306"
}

const serverlessConfiguration: AWS = {
  service: 'reperio-api',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: ['serverless-webpack', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    stage: 'dev',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      dbDatabaseName: config.database,
      dbUsername: config.user,
      dbPassword: config.password,
      dbPortNumber: config.port,
      dbHostname: config.host
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: { hello, recipes },
};

module.exports = serverlessConfiguration;
