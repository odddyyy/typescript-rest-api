import { Router } from 'express';

/** User controllers */
import { UserController } from '../controllers';

const router = Router();

/**
 * Endpoint: /user
 * POST : create a new user
 * GET  : get all users
 * GET  : /:id
 */

router.post(`/`, UserController.CreateUser);
router.get(`/`, UserController.GetUsers);

export default router;