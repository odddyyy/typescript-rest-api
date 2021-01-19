import { Request, Response, NextFunction } from 'express';

import { Users } from '../database/models';
import { bcrypt, today } from '../helpers';
import Success from '../middlewares/responseHandler';

export const CreateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body;
    const exist = await Users.findOne({ where: { email  }});
    if (exist) throw new Object({ statusCode: 400, message: `EMAIL_ALREADY_REGISTERED` });
    const user = new Users();
    user.name = name;
    user.email = email;
    user.password = await bcrypt.hashPassword(String(password));
    user.registered_date = today();
    await user.save();
  } catch (error) {
    return next(error);
  }
  Success(res, 201, `NEW_USER_CREATED`, null);
}

export const GetUsers = async (req: Request, res: Response, next: NextFunction) => {
  let users: any;
  try {
    users = await Users.find();
  } catch (error) {
    return next(error);
  }
  Success(res, 200, `GET_ALL_USERS`, users)
}