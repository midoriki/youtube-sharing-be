import express from 'express';
import AuthRoute from '@application/auth/AuthRoute';
import ProfileRoute from '@application/profile/ProfileRoute';
import VideoShareRoute from '@application/videoShare/VideoShareRoute';
import { authenticated } from '@libs/auth/strategies/JwtStrategy';

const route = express.Router();

route.use('/api/auth', AuthRoute);
route.use('/api/profile', authenticated, ProfileRoute);
route.use('/api/videoShare', authenticated, VideoShareRoute);

export default route;