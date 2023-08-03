import express from 'express';
import { authenticated } from '@libs/auth/strategies/JwtStrategy';
import AuthRoute from '@application/auth/AuthRoute';
import ProfileRoute from '@application/profile/ProfileRoute';
import VideoShareRoute from '@application/videoShare/VideoShareRoute';
import VoteRoute from '@application/vote/VoteRoute';

const route = express.Router();

route.use('/auth', AuthRoute);
route.use('/profile', authenticated, ProfileRoute);
route.use('/videoShare', VideoShareRoute);
route.use('/vote', authenticated, VoteRoute);

export default route;