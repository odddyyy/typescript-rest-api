import { Router } from 'express';
import user from './user-route';
import auth from './auth-route';
import todo from './todo-route';

const router = Router();

router.use(`/user`, user);
router.use(`/auth`, auth);
router.use(`/todo`, todo);

export default router;