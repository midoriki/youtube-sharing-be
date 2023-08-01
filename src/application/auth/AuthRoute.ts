import express from 'express';
import { login, register } from './AuthController';
import { bodyValidator } from '@libs/validation/validator';

const route = express.Router();

route.post('/login', bodyValidator('login'), login);
route.post('/register', bodyValidator('register'), register);

export default route;