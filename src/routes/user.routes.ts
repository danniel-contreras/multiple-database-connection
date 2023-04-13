import { Router } from 'express';
import { findUser, getAllUser, saveUser } from '../controllers/user.controller';

const router = Router();

router.get("/", getAllUser)
router.post("/",saveUser)
router.get("/find",findUser)

export default router;