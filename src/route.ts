import express from 'express';
import AuthRoute from '@application/route/AuthRoute';

const route = express.Router();

route.use('/api/auth', AuthRoute);

export default route;