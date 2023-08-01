import Joi from 'joi';
import LoginSchema from './LoginSchema';
import RegisterSchema from './RegisterSchema';
import CreateVideoShareSchema from './CreateVideoShareSchema';
import PaginationSchema from './PaginationSchema';
import VoteSchema from './VoteSchema';

export default {
  login: LoginSchema,
  register: RegisterSchema,
  createVideoShare: CreateVideoShareSchema,
  pagination: PaginationSchema,
  vote: VoteSchema
} as {
  [key: string]: Joi.ObjectSchema;
};