import type { AWS } from '@serverless/typescript';

import postRecipes from '@functions/postRecipes';
import updateRecipes from '@functions/updateRecipes';
import getRecipesByID from '@functions/getRecipesByID';

const serverlessConfiguration: AWS = {
  service: 'reperio-api',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
    rds: {
      prod: {
        endpoint: "mysql-database.caaeopmj7byg.us-east-1.rds.amazonaws.com",
        username: "dshehbaj",
        password: "aHjG2OGVxY87brUtnTZb",
        database: 'reperio',
        port: "3306"
      },
      dev: {
        endpoint: "localhost",
        username: "shehbaj",
        password: "shehbaj",
        database: 'reperio',
        port: "3306"
      }
    }
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
      DB_ENDPOINT: "${self:custom.rds.${self:provider.stage}.endpoint}",
      DB_USERNAME: "${self:custom.rds.${self:provider.stage}.username}",
      DB_PASSWORD: "${self:custom.rds.${self:provider.stage}.password}",
      DB_PORT: "${self:custom.rds.${self:provider.stage}.port}",
      DB_DBNAME: "${self:custom.rds.${self:provider.stage}.database}",
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: { postRecipes, updateRecipes, getRecipesByID },
};

module.exports = serverlessConfiguration;
