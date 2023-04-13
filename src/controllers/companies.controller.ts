import { Request, Response } from "express"
import { createCompany, getAllCompanies } from "../services/common/companies.service"

/**
 * This function saves a company by creating it and returns a success message or an error message.
 * @param {Request} req - Request object which contains the HTTP request information such as headers,
 * body, and parameters.
 * @param {Response} res - Response is an object that represents the HTTP response that an Express app
 * sends when it gets an HTTP request. It contains methods for sending a response back to the client,
 * such as res.send(), res.json(), res.status(), etc. In the given code snippet, the "res" parameter is
 * used to
 * @returns The function `saveCompany` is returning a Promise that resolves to a Response object. The
 * Response object contains a JSON object with either a success message and the result of creating a
 * company, or an error message and the error object.
 */
export const saveCompany = async (req: Request, res: Response) => {
    try {
        const result = await createCompany(req.body)
        return res.send({ ok: true, message: "Company created successfully", result })

    } catch (error) {
        return res.send({ ok: false, message: "Cannot create company", error })
    }
}

/**
 * This function exports an asynchronous function that retrieves all companies and sends the result or
 * an error response.
 * @param {Request} _ - The underscore symbol (_) is used as a placeholder for a parameter that is not
 * being used in the function. In this case, it is not being used in the function and is just a
 * placeholder.
 * @param {Response} res - The `res` parameter is an object representing the HTTP response that will be
 * sent back to the client. It contains methods and properties that allow the server to send data, set
 * headers, and control the response status.
 * @returns This function is returning a list of all companies by calling the `getAllCompanies()`
 * function and sending the result as a response. If there is an error, it will return an empty list
 * and the error message.
 */
export const findaAllCompanies = async (_: Request, res: Response) => {
    try {
        const result = await await getAllCompanies()
        return res.send({ result })
    } catch (error) {
        return res.send({ result: [], error })
    }
}