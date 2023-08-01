import Joi from 'joi';

export default Joi.object({
  page: Joi.number().min(0).messages({
    'number.min': 'page must be greater than 0',
    'number.base': 'page must be a number'
  }),
  perPage: Joi.number().min(0).messages({
    'number.min': 'perPage must be greater than 0',
    'number.base': 'perPage must be a number'
  })
});