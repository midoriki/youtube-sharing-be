import express from 'express';
import { authenticated } from '@libs/auth/strategies/JwtStrategy';
import AuthRoute from '@application/auth/AuthRoute';
import ProfileRoute from '@application/profile/ProfileRoute';
import VideoShareRoute from '@application/videoShare/VideoShareRoute';
import VoteRoute from '@application/vote/VoteRoute';

const route = express.Router();

route.use('/api/auth', AuthRoute);
route.use('/api/profile', authenticated, ProfileRoute);
route.use('/api/videoShare', VideoShareRoute);
route.use('/api/vote', authenticated, VoteRoute);

export default route;