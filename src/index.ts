import express, { Request, Response, NextFunction } from 'express';
import httpServer from 'http';

import { PORT } from './config';
import route from './route';

interface RequestError extends Error {
  status?: number;
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err: RequestError, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({ success: false, msg: err.toString() });
});

app.use('/', route);

const http = new httpServer.Server(app);

http.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
