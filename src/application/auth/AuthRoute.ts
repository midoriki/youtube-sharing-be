import express from 'express';
import { login } from './AuthController';

const route = express.Router();

route.post('/login', login);

export default route;