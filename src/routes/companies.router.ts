import { Router } from 'express';
import { findaAllCompanies, saveCompany } from '../controllers/companies.controller';

const routes = Router();

routes.post("/", saveCompany)

routes.get("/", findaAllCompanies)

export default routes