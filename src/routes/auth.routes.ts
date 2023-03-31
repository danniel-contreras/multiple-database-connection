import { Router } from 'express';
import { loginUser } from '../controllers/user.controller';

const routes = Router();

routes.post("/login",loginUser)

export default routes