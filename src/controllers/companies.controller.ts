import { Request, Response } from "express"
import { createCompany, getAllCompanies } from "../services/common/companies.service"

export const saveCompany = async (req: Request, res: Response) => {
    try {
        const result = await createCompany(req.body)
        return res.send({ ok: true, message: "Company created successfully", result })

    } catch (error) {
        return res.send({ ok: false, message: "Cannot create company", error })
    }
}

export const findaAllCompanies = async (_: Request, res: Response) => {
    try {
        const result = await await getAllCompanies()
        return res.send({ result })
    } catch (error) {
        return res.send({ result: [], error })
    }
}