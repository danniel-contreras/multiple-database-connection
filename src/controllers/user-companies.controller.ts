import { Request, Response } from 'express';
import { saveUserCompany, getUserCompanies, getAllUserCompanies } from './../services/common/user-company.service';

export const createUserCompany = async (req: Request, res: Response) => {
    try {
        const result = await saveUserCompany(req.body)
        return res.send({ ok: true, message: "User Company created successfully", result })
    } catch (error) {
        return res.send({ ok: false, message: "Cannot create user company", error })
    }
}

export const getAllUsersCompany = async (_: Request, res: Response) => {
    try {
        const result = await getAllUserCompanies()
        return res.send({ result })
    } catch (error) {
        return res.send({ result: [], error })
    }
}

export const getUserCompaniesByUser =()=>{}