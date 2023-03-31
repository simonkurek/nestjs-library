import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';

export const databaseConfiguration = registerAs('database', () => {
  return {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'pass123',
    database: process.env.DB_NAME || 'app',
  };
});

export type DatabaseConfiguration = ConfigType<typeof databaseConfiguration>;
export const InjectDatabaseConfig = () => Inject(databaseConfiguration.KEY);
