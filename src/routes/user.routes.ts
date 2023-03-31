import { Router } from 'express';
import { getAllUser, saveUser } from '../controllers/user.controller';

const router = Router();

router.get("/", getAllUser)
router.post("/",saveUser)

export default router;