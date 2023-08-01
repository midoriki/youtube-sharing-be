import { bodyValidator, queryValidator } from '@libs/validation/validator';
import express from 'express';
import { all, create } from './VideoShareController';

const route = express.Router();

route.get('/', queryValidator('pagination'), all);
route.post('/', bodyValidator('createVideoShare'), create);

export default route;