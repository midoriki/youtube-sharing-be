import User from '@domain/entities/User';
import UserRepo from '@infrastructure/repo/UserRepo';
import { Request, Response } from 'express';
import { sign } from 'libs/auth/jwt';

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  const user = await UserRepo.findByEmail(email);
  const validate = user?.validatePassword(password);

  if (!user || !validate) {
    return res.status(400).json({
      success: false,
      message: 'Invalid email or password.'
    });
  }

  const token = sign({ email: user.email });

  res.json({ success: true, token });
}

export async function register(req: Request, res: Response) {
  const { email, password } = req.body;

  const findUser = await UserRepo.findByEmail(email);

  if (findUser) {
    return res.status(400).json({
      success: false,
      message: 'User with email already exists.'
    });
  }

  const user = new User();
  user.email = email;
  user.password = password;

  await UserRepo.save(user);

  const token = sign({ email: user.email });

  res.json({ success: true, token });
}