import { User } from "../../entities/user.entity"
import jwt, { Secret } from "jsonwebtoken"
import { encrypt, decrypt, hashPassword } from '../../utils/bcrypt';
import { CreateUser } from '../../types/user.types';

export const SECRET_KEY: Secret = 'your-secret-key-here';

/**
 * This function takes an email address as a string, and returns a user object if the email address is
 * found in the database, otherwise it returns null.
 * @param {string} email - string
 * @returns A promise
 */
export const findUserByEmail = async (email: string) => {
    const result = await User.findOne({ where: { email } })
    return result
}

/**
 * It takes an id_user and a database_id, encrypts the database_id, and then returns a token.
 * @param {number} id_user - number =&gt; the user id
 * @param {number} database_id - number =&gt; the id of the database
 * @returns A token that is signed with the user's id and the company's database id.
 */
export const makeToken = (id_user: number, database_id: number) => {
    const token = jwt.sign({ _id: id_user, cmpny: encrypt(database_id.toString()) }, SECRET_KEY, { expiresIn: '2 days', })
    return token;
}

/**
 * This function takes an id_user and returns a token that expires in 2 days.
 * @param {number} id_user - the user's id
 * @returns A token that is signed with the user's id and the secret key.
 */
export const makeFirstToken = (id_user: number) => {
    const token = jwt.sign({ _id: id_user }, SECRET_KEY, { expiresIn: '2 days', })
    return token;
}

/**
 * It creates a user in the database
 * @param {CreateUser} data - CreateUser
 * @returns The result of the create method.
 */
export const createUser = async (data: CreateUser) => {
    const result = await User.create({ ...data, password: await hashPassword(data.password) })
    return result
}