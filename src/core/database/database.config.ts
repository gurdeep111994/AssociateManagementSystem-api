import * as dotenv from 'dotenv';

import { IDatabaseConfig } from './interfaces/dbConfig.interface';

dotenv.config();

export const databaseConfig: IDatabaseConfig = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_DEVELOPMENT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    pool: {
      max: parseInt(process.env.MAX_POOL),
      min: parseInt(process.env.MIN_POOL),
      idle: parseInt(process.env.IDLE_POOL),
    },
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_TEST,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    pool: {
      max: parseInt(process.env.MAX_POOL),
      min: parseInt(process.env.MIN_POOL),
      idle: parseInt(process.env.IDLE_POOL),
    },
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_PRODUCTION,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    pool: {
      max: parseInt(process.env.MAX_POOL),
      min: parseInt(process.env.MIN_POOL),
      idle: parseInt(process.env.IDLE_POOL),
    },
  },
};
