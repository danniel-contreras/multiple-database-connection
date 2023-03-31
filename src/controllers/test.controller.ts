import { UserServices } from '../services/user.services';
import { Request, Response } from 'express';
import jwt, { Secret } from "jsonwebtoken"
import { encrypt,decrypt } from '../utils/bcrypt';

export const SECRET_KEY: Secret = 'your-secret-key-here';

/**
 * It gets all users from the database
 * @param {Request} req - Request - This is the request object that is passed to the route handler.
 * @param {Response} res - Response - The response object that will be sent back to the client.
 * @returns The result of the findAllUsers() function.
 */
export const getAllUsers = async (req: Request, res: Response) => {

    const userService = new UserServices(decrypt(String(req.headers?.company)))
    try {
        const result = await userService.findAllUsers()
        return res.send({ users: result })
    } catch (error) {
        return res.send({ error })
    }
}

/**
 * It takes a request, and a response, and returns a response
 * @param {Request} req - Request - this is the request object that is passed to the function.
 * @param {Response} res - Response - the response object
 * @returns The result of the findByEmail function.
 */
export const findUserByEmail = async (req: Request, res: Response) => {
    const userService = new UserServices(req.body?.dbname)
    try {
        const result = await userService.findByEmail(req.body.email)
        return res.send({ result })
    } catch (error) {
        return res.send({ error })
    }
}

/**
 * It takes a request, checks if the email and password are correct, and if they are, it returns a
 * token and the user object.
 * @param {Request} req - Request -&gt; The request object
 * @param {Response} res - Response -&gt; this is the response object that is returned to the client
 * @returns {
 *     "accessToken":
 * "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjI1YzY1YzYwYzI0MjAwMjIwMzI4YzgiLC
 */
export const loginUser = async (req: Request, res: Response) => {
    const userService = new UserServices(req.body?.dbname)
    try {
        const result = await userService.findByEmail(req.body.email)
        if (result) {
            if (result.password === req.body?.password) {
                const token = jwt.sign({ _id: result.userId, cmpny: encrypt("another_db") }, SECRET_KEY, { expiresIn: '2 days', })
                return res.send({ accessToken: token, user: result, message: "Welcome" })
            } else {
                return res.send({ message: "Email or password incorrect" })
            }
        } else {
            return res.send({ message: "Email or password incorrect" })
        }
    } catch (error) {
        return res.send({ message: "Email or password incorrect", error })
    }
}