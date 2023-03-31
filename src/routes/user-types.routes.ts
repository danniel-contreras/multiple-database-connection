import { Router } from 'express';
import { createUserType, findAll } from '../controllers/user-types.controller';

const router = Router()

router.get("/", findAll)
router.post("/", createUserType)

export default router;