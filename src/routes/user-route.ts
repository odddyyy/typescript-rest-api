import { Router } from 'express';

/** User controllers */
import { UserController } from '../controllers';

const router = Router();

/**
 * Endpoint: /user
 * POST : create a new user
 * GET  : get all users
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