import { NextFunction, Request, Response } from 'express';

import * as yup from 'yup';

const validate =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newSchema = await schema.cast(req.body, {
        stripUnknown: true,
        abortEarly: false,
      });

      req.body = newSchema;

      await schema.validate(req.body, {
        abortEarly: false,
      });

      return next();
    } catch (err: any) {
      if (err instanceof yup.ValidationError) {
        console.log('err.errors', err.errors);
        return next(new Error(err.errors.join(',')));
      }
      return next(err);
    }
  };

export default validate;

