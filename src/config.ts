/* eslint-disable prefer-destructuring */
export const PORT = process.env.PORT;
export const PROD = (process.env.NODE_ENV === 'production');
export const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN;