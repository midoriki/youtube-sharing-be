import Joi from 'joi';
import LoginSchema from './LoginSchema';
import RegisterSchema from './RegisterSchema';

export default {
  login: LoginSchema,
  register: RegisterSchema
} as {
  [key: string]: Joi.ObjectSchema;
};