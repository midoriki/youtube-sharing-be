import { bodyValidator } from '@libs/validation/validator';
import express from 'express';
import { create } from './VoteController';

const route = express.Router();

route.post('/', bodyValidator('vote'), create);

export default route;