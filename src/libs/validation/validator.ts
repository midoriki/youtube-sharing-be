import { NextFunction, Request, Response } from 'express';
import Schemas from './schemas';
import Joi from 'joi';

export default function validator(schema: string | Joi.ObjectSchema) {
  const isString = typeof schema === 'string';
  if(isString && !Schemas.hasOwnProperty(schema)) {
    throw new Error(`'${schema}' schema does not exists.`);
  }

  return async function(req: Request, res: Response, next: NextFunction) {
    try {
      const validated = await (
        isString ? Schemas[schema] : schema
      ).validateAsync(req.body, { abortEarly: false });
      
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