import express from 'express';
import { login, register } from './AuthController';
import validator from '@/libs/validation/validator';

const route = express.Router();

route.post('/login', validator('login'), login);
route.post('/register', validator('register'), register);

export default route;