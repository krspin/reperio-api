import type { AWS } from '@serverless/typescript';

import postRecipes from '@functions/postRecipes';
import updateRecipes from '@functions/updateRecipes';
import getRecipesByID from '@functions/getRecipesByID';
import deleteRecipesByID from '@functions/deleteRecipesByID';

import awsconfig from './config';

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
    stage: "${opt:stage, 'dev'}",
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      DB_ENDPOINT: awsconfig['dev'].rds.endpoint,
      DB_USERNAME: awsconfig['dev'].rds.username,
      DB_PASSWORD: awsconfig['dev'].rds.password,
      DB_PORT: awsconfig['dev'].rds.port,
      DB_DBNAME: awsconfig['dev'].rds.database
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: { postRecipes, updateRecipes, getRecipesByID, deleteRecipesByID },
};

module.exports = serverlessConfiguration;
