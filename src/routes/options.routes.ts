import { Router } from 'express';
import { saveOption } from '../controllers/options.controller';

const routes = Router();

routes.post("/", saveOption)
// routes.post("/", savePage)

export default routes