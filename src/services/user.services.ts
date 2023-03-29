import { UserModel } from '../models/user.model';
import { CreateUser, UserI } from '../types/user.types';
import { Model } from 'sequelize';
import { hashPassword } from '../utils/bcrypt';
export class UserServices {
    constructor(database: string) {
        this.User = new UserModel(database)
    }
    User: UserModel

    /**
     * It returns a promise that resolves to an array of objects.
     * @returns The result of the query.
     */
    async findAllUsers(): Promise<Model<UserI>[]> {
        const Users = await this.User.User.findAll({ attributes: { exclude: ["password"] } });
        return Users
    }

    async findByEmail(email: string) {
        const User = await this.User.User.findOne({ where: { email } })
        return User?.dataValues
    }

    /**
     * It creates a user in the database
     * @param {CreateUser} body - CreateUser
     * @returns The result of the query.
     */
    async createUser(body: CreateUser) {
        try {
            const result = await this.User.User.create({ ...body, password: await hashPassword(body.password) })
            return result;
        } catch (error) {
            return error
        }
    }
}