import { Company } from "../../entities/company.entity"
import { CreateCompany } from "../../types/company.types";

export const createCompany = async (data:CreateCompany) => {
    const result = await Company.create({...data})
    return result;
}

export const getAllCompanies = async () => {
    const result = await Company.findAll()
    return result;
}
