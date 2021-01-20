import { Request, Response, NextFunction } from 'express';
import { Users } from '../database/models';
import { bcrypt, token } from '../helpers';
import Success from '../middlewares/responseHandler';

export const Login = async (req: Request, res: Response, next: NextFunction) => {
  let access_token: string;
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ where: { email } });
    if (!user) throw new Object({ statusCode: 401, message: `invalid email / password` });
    const isValid: boolean = await bcrypt.verifyPassword(password, user.password);
    if (!isValid) throw new Object({ statusCode: 401, message: `invalid email / password` });
    const payload = {
      id: user.id,
      name: user.name
    };
    access_token = await token.createToken(payload);
  } catch (error) {
    return next(error);
  }
  Success(res, 200, `LOGIN_SUCCESS`, { access_token });
};