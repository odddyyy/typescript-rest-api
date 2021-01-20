import { Router } from 'express';

/** User controllers */
import { TodoController } from '../controllers';
import authentication from '../middlewares/auth';

const router = Router();

/**
 * Endpoint: /todo
 * POST : create a new todo
 * GET  : get all todos
 * GET  : /:id
 * DEL  : /:id
 * PATCH: /:id
 */

router.post(`/`, authentication, TodoController.CreateTodo);
router.get(`/`, authentication, TodoController.GetTodos);
router.get(`/:id`, authentication, TodoController.GetTodo);
router.delete(`/:id`, authentication, TodoController.DeleteTodo);
router.patch(`/:id`, authentication, TodoController.EditTodo);
router.patch(`/status_change/:id`, authentication, TodoController.UpdateStatus);

export default router;