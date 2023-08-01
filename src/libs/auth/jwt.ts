import { JWT_EXPIRE_TIME, JWT_SECRET } from '@/config';
import jwt from 'jsonwebtoken';

export function sign(user: { email: string }) {
  return jwt.sign(user, JWT_SECRET, {
    expiresIn: parseInt(JWT_EXPIRE_TIME)
  });
}
