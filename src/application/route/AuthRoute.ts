import express from 'express';
import UserRepo from '@infrastructure/repo/UserRepo';

const route = express.Router();

route.get('/login', (req, res) => {
  const user = UserRepo.findByEmail('faker@gmail.com');
  res.json(user);
});

export default route;