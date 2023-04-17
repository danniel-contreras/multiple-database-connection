import { Router } from 'express';
import { getMenuOptions, saveMenuOptions } from '../controllers/menu-options.controller';

const routes = Router();

routes.post("/", saveMenuOptions)

routes.get("/:id", getMenuOptions)

export default routes