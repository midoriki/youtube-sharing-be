import { JWT_EXPIRE_TIME, JWT_SECRET } from 'config';
import jwt from 'jsonwebtoken';
import passport from 'passport';

export function sign(user: { email: string }) {
  return jwt.sign(user, JWT_SECRET, {
    expiresIn: JWT_EXPIRE_TIME
  });
}
