/* eslint-disable prefer-destructuring */
export const PORT = process.env.PORT;
export const PROD = (process.env.NODE_ENV === 'production');

export const JWT_SECRET = process.env.JWT_SECRET || 'secret';
export const JWT_EXPIRE_TIME = process.env.JWT_EXPIRE_TIME || 1800;