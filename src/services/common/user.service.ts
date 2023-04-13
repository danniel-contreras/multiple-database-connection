import { User } from "../../entities/user.entity";
import jwt, { Secret } from "jsonwebtoken";
import { encrypt, decrypt, hashPassword } from "../../utils/bcrypt";
import { CreateUser } from "../../types/user.types";
import { Op } from "sequelize";
import { UserType } from "../../entities/user-type.entity";

export const SECRET_KEY: Secret = "your-secret-key-here";

/**
 * This function takes an email address as a string, and returns a user object if the email address is
 * found in the database, otherwise it returns null.
 * @param {string} email - string
 * @returns A promise
 */
export const findUserByEmail = async (email: string) => {
  const result = await User.findOne({ where: { email } });
  return result;
};

/**
 * It takes an id_user and a database_id, encrypts the database_id, and then returns a token.
 * @param {number} id_user - number =&gt; the user id
 * @param {number} database_id - number =&gt; the id of the database
 * @returns A token that is signed with the user's id and the company's database id.
 */
export const makeToken = (id_user: number, database_id: number) => {
  const token = jwt.sign(
    { _id: id_user, cmpny: encrypt(database_id.toString()) },
    SECRET_KEY,
    { expiresIn: "2 days" }
  );
  return token;
};

/**
 * This function takes an id_user and returns a token that expires in 2 days.
 * @param {number} id_user - the user's id
 * @returns A token that is signed with the user's id and the secret key.
 */
export const makeFirstToken = (id_user: number) => {
  const token = jwt.sign({ _id: id_user }, SECRET_KEY, { expiresIn: "2 days" });
  return token;
};

/**
 * It creates a user in the database
 * @param {CreateUser} data - CreateUser
 * @returns The result of the create method.
 */
export const createUser = async (data: CreateUser) => {
  const result = await User.create({
    ...data,
    password: await hashPassword(data.password),
  });
  return result;
};

/**
 * This is a TypeScript function that searches for users based on a given name and returns a maximum of
 * 5 results with their attributes excluding the password.
 * @param {string} [name] - The name parameter is a string that represents the name of the user being
 * searched for. It is an optional parameter and if not provided, the function will return the first 5
 * users in the database. If provided, the function will return up to 5 users whose usernames contain
 * the provided name.
 * @returns The function `searchUser` is returning a Promise that resolves to an array of up to 5 User
 * objects whose `userNames` attribute matches the provided `name` parameter (using the `Op.like`
 * operator to perform a partial match). The returned User objects will have their `password` attribute
 * excluded from the result.
 */
export const searchUser = async (name: string = "") => {
  const result = await User.findAll({
    limit: 5,
    where: { userNames: { [Op.like]: "%" + name + "%" } },
    attributes: {
      exclude: ["password"],
    },
  });
  return result;
};
