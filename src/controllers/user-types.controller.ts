import { Response, Request } from 'express';
import { UserType } from '../entities/user-type.entity';

/**
 * Find all the user types in the database and return them.
 * @returns An array of objects.
 */
export const findAll = async (req: Request, res: Response) => {
    const result = await UserType.findAll()
    return res.send({ result })
}

/**
 * It creates a user-type in the database.
 * @param {Request} req - Request - this is the request object that is passed to the function.
 * @param {Response} res - Response - this is the response object that will be sent back to the client.
 * @returns an object with a result and a message.
 */
export const createUserType = async (req: Request, res: Response) => {
    const { typeName } = req.body
    try {
        const result = await UserType.create({ typeName })
        return res.send({ result, message: "User-type created successfully" })
    } catch (error) {
        return res.send({ error, message: "user-type not created" })
    }
}