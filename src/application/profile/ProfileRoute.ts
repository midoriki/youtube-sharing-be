import express from 'express';
import { authenticated } from '@libs/auth/strategies/JwtStrategy';

const route = express.Router();

route.get('/', authenticated, (req, res) => {
  res.json({ success: true, user: req.user });
});

export default route;