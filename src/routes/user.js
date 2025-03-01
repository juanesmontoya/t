import { Router } from "express";
import { userList, createUser, getUser } from "../controllers/user.js"

const router = Router();

router.get('/users', userList);

router.post('/user', createUser);

router.get('/user', getUser);

export default router