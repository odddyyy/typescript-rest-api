import { Request, Response, NextFunction, request } from 'express';

export default (err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(`ERROR HANDLED\n`, err)
  switch (err.name) {
    case `QueryFailedError`:
      return res.status(400).json({ error: true, message: err.message });

    default:
      break;
  }
  res.status(err.statusCode).json({ error: true, message: err.message, error_data: err.data });
};