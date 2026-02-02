import { DataSource } from 'typeorm';
import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.PROJECT_DB_HOST,
  port: Number(process.env.PROJECT_DB_PORT),
  username: process.env.PROJECT_DB_USER,
  password: process.env.PROJECT_DB_PASSWORD,
  database: process.env.PROJECT_DB_NAME,
  entities: ['src/entities/*.entity{.ts,.js}'],
  migrations: ['src/migrations/*.ts', 'dist/migrations/*.js'],
  synchronize: false,
});
