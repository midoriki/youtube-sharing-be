import Joi from 'joi';

export default Joi.object({
  url: Joi.string().uri().required().messages({
    'any.required': 'URL is required',
    'string.empty': 'URL can not be empty',
    'string.uri': 'Invalid URL'
  })
});