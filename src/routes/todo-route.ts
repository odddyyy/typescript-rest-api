import { Router } from 'express';

/** User controllers */
import { UserController } from '../controllers';

const router = Router();

/**
 * Endpoint: /todo
 * POST : create a new todo
 * GET  : get all todos
 * GET  : /:id
 * DEL  : /:id
 * PATCH: /:id
 */

router.post(`/`, UserController.CreateUser);
router.get(`/`, UserController.GetUsers);
router.get(`/:id`, UserController.GetUser);
router.delete(`/:id`, UserController.DeleteUser);
router.patch(`/:id`, UserController.EditUser);

export default router;