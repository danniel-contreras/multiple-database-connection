import { create_page, get_all_pages } from "../services/common/pages.service"
import { Request, Response } from "express"

/**
 * This function saves a page by creating it and returning a success message or an error message if it
 * fails.
 * @param {Request} req - The req parameter is an object that represents the HTTP request made to the
 * server. It contains information such as the request method, headers, URL, and request body.
 * @param {Response} res - Response is an object that represents the HTTP response that an Express app
 * sends when it receives an HTTP request. It contains methods for sending a response back to the
 * client, such as res.send(), res.json(), res.status(), etc. In the given code snippet, the "res"
 * parameter is used to
 * @returns The function `savePage` is returning a response to the client. If the `create_page`
 * function is successful, it will return a response with `ok: true`, a success message, and the result
 * of the `create_page` function. If there is an error, it will return a response with `ok: false`, an
 * error message, and the error object.
 */
export const savePage = async (req: Request, res: Response) => {
    try {
        const result = await create_page(req.body)
        return res.send({ ok: true, message: "Page created successfully", result })

    } catch (error) {
        return res.send({ ok: false, message: "Cannot create page", error })
    }
}

export const getPages = async (_: Request, res: Response) => {
    try {
        const result = await get_all_pages()
        return res.send({ pages: result })
    } catch (error) {
        return res.send({ pages: [] })
    }
}