import Joi from 'joi';
import LoginSchema from './LoginSchema';
import RegisterSchema from './RegisterSchema';
import CreateVideoShareSchema from './CreateVideoShareSchema';
import PaginationSchema from './PaginationSchema';

export default {
  login: LoginSchema,
  register: RegisterSchema,
  createVideoShare: CreateVideoShareSchema,
  pagination: PaginationSchema
} as {
  [key: string]: Joi.ObjectSchema;
};