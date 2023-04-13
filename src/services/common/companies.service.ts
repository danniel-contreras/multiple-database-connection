import { Company } from "../../entities/company.entity"
import { CreateCompany } from "../../types/company.types";

/**
 * This function creates a new company using the provided data.
 * @param {CreateCompany} data - CreateCompany is likely an interface or type that defines the shape of
 * the data object being passed into the function. Without seeing the definition of CreateCompany, it's
 * difficult to say exactly what properties it contains. However, based on the function name and the
 * fact that it's creating a new company, it
 * @returns The function `createCompany` is returning the result of creating a new company in the
 * database using the `Company.create` method. The result could be an object representing the newly
 * created company or an error if the creation process fails.
 */
export const createCompany = async (data:CreateCompany) => {
    const result = await Company.create({...data})
    return result;
}

/**
 * This function retrieves all companies from a database using Sequelize ORM and returns them.
 * @returns The function `getAllCompanies` is returning a promise that resolves to an array of all the
 * companies in the database.
 */
export const getAllCompanies = async () => {
    const result = await Company.findAll()
    return result;
}
