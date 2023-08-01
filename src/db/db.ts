import User from '@domain/entities/User';
import { DB, PROD } from 'config';
import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const db = new DataSource({
  type: 'postgres',
  host: DB.host,
  port: DB.port,
  username: DB.user,
  password: DB.password,
  database: DB.database,
  synchronize: true,
  logging: !PROD,
  namingStrategy: new SnakeNamingStrategy(),
  entities: [User]
});

export default db;