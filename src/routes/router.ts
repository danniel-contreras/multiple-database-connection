import { Router } from 'express';
import userTypeRoutes from "./user-types.routes"
import userRoutes from "./user.routes"
import authRoutes from "./auth.routes"
import companyRoutes from "./companies.router"
import menuRoutes from "./menus.routes"
import optionRoutes from "./options.routes"

const routes = Router();

const API_VER = process.env.API_VER || "/api/v1";

routes.use(API_VER + "/user-types", userTypeRoutes)

routes.use(API_VER + "/users", userRoutes)

routes.use(API_VER + "/auth", authRoutes)

routes.use(API_VER + "/company", companyRoutes)


routes.use(API_VER + "/menu", menuRoutes)

routes.use(API_VER + "/option", optionRoutes)

export default routes;