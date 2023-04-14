import { Router } from "express";
import {
  getMenus,
  getMenusByUser,
  getPagesByUser,
  saveMenu,
} from "../controllers/menus.controller";

const routes = Router();

routes.post("/", saveMenu);
routes.get("/options", getMenus);

routes.get("/options/:id", getMenusByUser);

routes.get("/pages/:id", getPagesByUser);
// routes.post("/", savePage)

export default routes;
