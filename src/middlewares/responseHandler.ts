import { Response } from 'express';

export default (res: Response, statusCode: number, message: string, data: any) => {
  return res.status(statusCode).json({ error: false, message, data });
}