import { Company } from "../../entities/company.entity";
import { UserCompany } from "../../entities/user-companies";
import { User } from "../../entities/user.entity";
import { CreateUserCompany } from "../../types/user-company.types";

export const saveUserCompany = async (data: CreateUserCompany) => {
    return await UserCompany.create({ ...data })
}

export const getAllUserCompanies = async () => {
    return await UserCompany.findAll()
}

export const getUserCompanies = async (id: number) => {
    return await UserCompany.findAll({
        where: { user: { idUser: id } }, include: [{
            model: User, as: User.tableName
        }, {
            model: Company, as: Company.tableName
        }]
    })
}