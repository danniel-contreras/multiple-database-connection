import { Router } from "express";
import { saveOption, getOptions } from "../controllers/options.controller";

const routes = Router();

routes.post("/", saveOption);
routes.get("/", getOptions);

export default routes;
