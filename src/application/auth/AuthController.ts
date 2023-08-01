import { Request, Response } from 'express';
import { sign } from 'libs/auth/jwt';

export async function login(req: Request, res: Response) {
  const { email } = req.body;

  const user = { email };

  const token = sign(user);

  res.json({ success: true, token });
}