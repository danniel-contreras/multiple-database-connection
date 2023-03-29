import { UserServices } from '../services/user.services';
import { Request, Response } from 'express';

/**
 * It gets all users from the database
 * @param {Request} req - Request - This is the request object that is passed to the route handler.
 * @param {Response} res - Response - The response object that will be sent back to the client.
 * @returns The result of the findAllUsers() function.
 */
export const getAllUsers = async (req: Request, res: Response) => {
    const userService = new UserServices(req.body?.dbname)
    try {
        const result = await userService.findAllUsers()
    //    result.forEach((res)=>{
    //     delete res._model.dataValues.password
    //    })
        return res.send({ users: result })
    } catch (error) {
        return res.send({ error })
    }
} 