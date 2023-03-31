import { Router } from 'express';
import userTypeRoutes from "./user-types.routes"
import userRoutes from "./user.routes"
import authRoutes from "./auth.routes"
import companyRoutes from "./companies.router"

const routes = Router();

const API_VER = process.env.API_VER || "/api/v1";

routes.use(API_VER + "/user-types", userTypeRoutes)

routes.use(API_VER + "/users", userRoutes)

routes.use(API_VER + "/auth", authRoutes)

routes.use(API_VER + "/company", companyRoutes)

export default routes;