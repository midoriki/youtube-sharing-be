import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import httpServer from 'http';
import { PORT } from './config/config';
import route from './route';
import '@libs/auth/strategies/JwtStrategy';
import passport from 'passport';
import db from '@db/db';
import cors from 'cors';

interface RequestError extends Error {
  status?: number;
}

db.initialize().then(() => {
  console.log('[TypeORM] initialized.');
}).catch((error) => {
  console.log('[TypeORM] failed to initialized.', error);
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err: RequestError, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({ success: false, msg: err.toString() });
});

app.use(passport.initialize());

app.use('/', route);

const http = new httpServer.Server(app);

http.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
