import { Company } from "../../entities/company.entity";
import { UserCompany } from "../../entities/user-companies";
import { User } from "../../entities/user.entity";
import { CreateUserCompany } from "../../types/user-company.types";

/**
 * This function saves a new user company in a database using the provided data.
 * @param {CreateUserCompany} data - CreateUserCompany object which contains the data needed to create
 * a new UserCompany record in the database.
 * @returns The `saveUserCompany` function is returning a Promise that resolves to the result of
 * creating a new `UserCompany` document in the database with the data provided in the `data`
 * parameter.
 */
export const saveUserCompany = async (data: CreateUserCompany) => {
  return await UserCompany.create({ ...data });
};

/**
 * This function retrieves all user companies from a database using Sequelize ORM in TypeScript.
 * @returns The function `getAllUserCompanies` is returning a promise that resolves to an array of all
 * user companies fetched from the database using the `findAll` method of the `UserCompany` model.
 */
export const getAllUserCompanies = async () => {
  return await UserCompany.findAll();
};

/**
 * This function retrieves all companies associated with a given user ID, including information about
 * the user and the company.
 * @param {number} id - The parameter `id` is a number representing the ID of the user whose companies
 * are being retrieved.
 * @returns The function `getUserCompanies` is returning a Promise that resolves to an array of
 * `UserCompany` objects that match the given `idUser` parameter. The returned objects will also
 * include the associated `User` object (with the `password` attribute excluded) and the associated
 * `Company` object.
 */
export const getUserCompanies = async (id: number) => {
  return await UserCompany.findAll({
    where: { user: { idUser: id } },
    include: [
      {
        model: User,
        attributes: { exclude: ["password"] },
      },
      {
        model: Company,
      },
    ],
  });
};
