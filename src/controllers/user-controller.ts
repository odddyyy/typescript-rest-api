import { Request, Response, NextFunction } from 'express';
import { Users } from '../database/models';
import { bcrypt, today } from '../helpers';
import Success from '../middlewares/responseHandler';

export const CreateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body;
    const exist = await Users.findOne({ where: { email }});
    if (exist) throw new Object({ statusCode: 400, message: `EMAIL_ALREADY_REGISTERED` });
    if (!password) throw new Object({ statusCode: 400, message: `password cannot be null` });
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
};

export const GetUsers = async (req: Request, res: Response, next: NextFunction) => {
  let users: any;
  try {
    users = await Users.find({ select: [`id`, `name`, `email`, `registered_date`] });
  } catch (error) {
    return next(error);
  }
  Success(res, 200, `GET_ALL_USERS`, users);
};

export const GetUser = async (req: Request, res: Response, next: NextFunction) => {
  let user: any;
  try {
    const { id } = req.params;
    user = await Users.findOne({ where: { id }, select: [`id`, `name`, `email`, `registered_date`] });
    if (!user) throw new Object({ statusCode: 404, message: `USER_NOT_FOUND` });
  } catch (error) {
    return next(error);
  }
  Success(res, 200, `GET_USER`, user);
};

export const DeleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const user = await Users.findOne({ where: { id }, select: [`id`, `name`, `email`, `registered_date`] });
    if (!user) throw new Object({ statusCode: 404, message: `USER_NOT_FOUND` });
    await Users.delete(id);
  } catch (error) {
    return next(error);
  }
  Success(res, 201, `USER_DELETED`, null);
};

export const EditUser = async (req: Request, res: Response, next: NextFunction) => {
  let user;
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const user = await Users.findOne({ where: { id } });
    if (!user) throw new Object({ statusCode: 404, message: `USER_NOT_FOUND` });
    user.name = name;
    user.email = email;
    await user.save();
  } catch (error) {
    return next(error);
  }
  Success(res, 201, `USER_UPDATED`, user);
};