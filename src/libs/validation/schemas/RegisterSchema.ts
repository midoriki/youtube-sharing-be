import Joi from 'joi';

const schema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'any.required': 'Email is required',
      'string.email': 'Email is invalid',
      'string.empty': 'Email can not be empty',
    }),
  password: Joi.string().min(6).required().messages({
    'any.required': 'Password is required',
    'string.min': 'Password is too short',
    'string.empty': 'Password can not be empty',
  }),
  passwordConfirmation: Joi.any().valid(Joi.ref('password')).required().messages({
    'any.required': 'Repeat password is required',
    'any.only': 'Repeat password does not match',
  }),
});

export default schema;