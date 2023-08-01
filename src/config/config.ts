/* eslint-disable prefer-destructuring */
export const PORT = process.env.PORT;
export const PROD = (process.env.NODE_ENV === 'production');

export const DB = {
  port: parseInt(process.env.DB_PORT || '5432'),
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

export const JWT_SECRET = process.env.JWT_SECRET || 'secret';
export const JWT_EXPIRE_TIME = process.env.JWT_EXPIRE_TIME || '1800';

export const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;