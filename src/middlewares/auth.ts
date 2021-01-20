import { Request, Response, NextFunction } from 'express';
import { token } from '../helpers'

export default async (req: any, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    if(!authorization) throw new Object({ statusCode: 401, message: `UNAUTHENTICATED_ACCESS` });
    const verified = await token.verifyToken(authorization.split(` `)[1]);
    req.users = verified;
  } catch (error) {
    return next(error);
  }
  next();
};