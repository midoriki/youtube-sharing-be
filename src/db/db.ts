import { DB, PROD } from '@config/config';
import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import entities from '@domain/entities';

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
  entities
});

export default db;