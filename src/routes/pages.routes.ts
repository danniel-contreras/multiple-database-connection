import { Router } from 'express';
import { getPages, savePage } from '../controllers/pages.controller';

const routes = Router();

routes.get("/", getPages)
routes.post("/", savePage)

export default routes