import { Router } from "express";
import controller from "../controllers/user.controller.js";
const router = Router();

    router.get('/users', controller.getUsers);
    router.post('/users', controller.postUser);
    router.delete('/users/:id', controller.deleteUser);

export default router;