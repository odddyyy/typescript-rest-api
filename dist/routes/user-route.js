"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
/** User controllers */
const controllers_1 = require("../controllers");
const router = express_1.Router();
/**
 * Endpoint: /user
 * POST : create a new user
 * GET  : get all users
 * GET  : /:id
 */
router.post(`/`, controllers_1.UserController.CreateUser);
router.get(`/`, controllers_1.UserController.GetUsers);
exports.default = router;
//# sourceMappingURL=user-route.js.map