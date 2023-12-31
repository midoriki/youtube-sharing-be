import { bodyValidator, queryValidator } from '@libs/validation/validator';
import express from 'express';
import { all, create } from './VideoShareController';
import { authenticated } from '@libs/auth/strategies/JwtStrategy';

const route = express.Router();

route.get('/all', queryValidator('pagination'), all);
route.get('/', [authenticated, queryValidator('pagination')], all);
route.post('/', [authenticated, bodyValidator('createVideoShare')], create);

export default route;