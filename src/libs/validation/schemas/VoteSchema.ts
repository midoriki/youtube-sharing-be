import Joi from 'joi';

export default Joi.object({
  videoShareId: Joi.string().uuid().required().messages({
    'any.required': 'VideoShare Id is required',
    'string.guid': 'Video Id must be an valid UUID'
  }),
  type: Joi.string().valid('up', 'down').required().messages({
    'any.required': 'Vote type is required',
    'any.only': 'Invalid Vote type'
  })
});