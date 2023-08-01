import express from 'express';
import AuthRoute from '@application/auth/AuthRoute';
import ProfileRoute from '@application/profile/ProfileRoute';

const route = express.Router();

route.use('/api/auth', AuthRoute);
route.use('/api/profile', ProfileRoute);

export default route;