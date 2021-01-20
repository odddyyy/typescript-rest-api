import { Request, Response, NextFunction } from 'express';
import { Todos } from '../database/models';
import { today } from '../helpers';
import Success from '../middlewares/responseHandler';

export const CreateTodo = async (req: any, res: Response, next: NextFunction) => {
  let result: any;
  try {
    const { title, description } = req.body;
    const todo = new Todos();
    todo.title = title;
    todo.description = description;
    todo.created_at = today();
    todo.userId = req.users.id;
    result = await todo.save();
  } catch (error) {
    return next(error);
  }
  Success(res, 201, `TODO_CREATED`, result);
};

export const GetTodos = async (req: any, res: Response, next: NextFunction) => {
  let result: any;
  try {
    result = await Todos.find({ where: { userId: req.users.id } });
  } catch (error) {
    return next(error);
  }
  Success(res, 200, `GET_ALL_TODOS`, result);
};

export const GetTodo = async (req: any, res: Response, next: NextFunction) => {
  let todo: any;
  try {
    todo = await Todos.findOne({ where: { id: req.params.id } });
    if (!todo) throw new Object({ statusCode: 404, message: `TODO_NOT_FOUND` });
    if (todo.userId !== req.users.id) throw new Object({ statusCode: 401, message: `UNAUTHORIZED_ACCESS` });
  } catch (error) {
    return next(error);
  }
  Success(res, 200, `GET_TODO`, todo);
};

export const DeleteTodo = async (req: any, res: Response, next: NextFunction) => {
  try {
    const todo = await Todos.findOne({ where: { id: req.params.id } });
    if (!todo) throw new Object({ statusCode: 404, message: `TODO_NOT_FOUND` });
    if (todo.userId !== req.users.id) throw new Object({ statusCode: 401, message: `UNAUTHORIZED_ACCESS` });
    await Todos.delete(req.result.id);
  } catch (error) {
    return next(error);
  }
  Success(res, 201, `DELETE_TODO_SUCCESS`, null);
};

export const EditTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    
  } catch (error) {
    return next();
  }
};

export const UpdateStatus = async (req: any, res: Response, next: NextFunction) => {
  try {
    const todo = await Todos.findOne({ where: { id: req.params.id } });
    if (!todo) throw new Object({ statusCode: 404, message: `TODO_NOT_FOUND` });
    if (todo.userId !== req.users.id) throw new Object({ statusCode: 401, message: `UNAUTHORIZED_ACCESS` });
    todo.status = !todo.status;
    await todo.save()
  } catch (error) {
    return next(error);
  }
  Success(res, 200, `STATUS_CHANGED`, null);
};