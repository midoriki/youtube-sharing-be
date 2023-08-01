import express, { Request, Response } from 'express';

const route = express.Router();

route.get('/', (req: Request, res: Response) => {
  res.json({ success: true, user: req.user });
});

export default route;