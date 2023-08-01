import { NextFunction, Request, Response } from 'express';
import Schemas from './schemas';
import Joi from 'joi';

type ValidatorParam = string | Joi.ObjectSchema;

export function bodyValidator(schema: ValidatorParam) {
  return validator(schema, 'body');
}

export function queryValidator(schema: ValidatorParam) {
  return validator(schema, 'query');
}

function validator(schema: ValidatorParam, part: 'body' | 'query') {
  const isString = typeof schema === 'string';
  if(isString && !Schemas.hasOwnProperty(schema)) {
    throw new Error(`'${schema}' schema does not exists.`);
  }

  return async function(req: Request, res: Response, next: NextFunction) {
    try {
      const validated = await (
        isString ? Schemas[schema] : schema
      ).validateAsync(req[part], { abortEarly: false });
      
      req.body = validated;
      next();
    } catch (error: any) {
      if(error instanceof Joi.ValidationError) {
        return res.status(400).json({
          success: false,
          message: error.message,
          details: error.details
        });
      }
      next(error);
    }
  };
}