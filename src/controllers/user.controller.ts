import { Request, Response } from "express";
import { User } from "../entities/user.entity";
import {
  createUser,
  findUserByEmail,
  makeFirstToken,
  searchUser,
} from "../services/common/user.service";
import { checkPassword } from "../utils/bcrypt";

/**
 * It's a function that takes a request and a response, and returns a response with the result of a
 * database query.
 * @param {Request} req - Request - The request object
 * @param {Response} res - Response - The response object that will be sent back to the client.
 * @returns An object with a property called result.
 */
export const getAllUser = async (req: Request, res: Response) => {
  const result = await User.findAll();
  return res.send({ result });
};

/**
 * It takes a request and a response, and returns a response.
 * @param {Request} req - Request
 * @param {Response} res - Response
 * @returns The user object is being returned.
 */
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);
  if (user) {
    if (await checkPassword(password, user.password)) {
      return res.send({
        user: {
          username: user.userNames + " " + user.lastNames,
          user_id: user.idUser,
        },
        ok: true,
        accessToken: makeFirstToken(user.idUser),
      });
    } else {
      return res.send({
        ok: false,
        message: "user email or password incorect",
      });
    }
  } else {
    return res.send({ ok: false, message: "user email or password incorect" });
  }
};

/**
 * It takes a request and a response, and then it tries to create a user with the data from the request
 * body. If it succeeds, it sends a response with the result. If it fails, it sends a response with the
 * error
 * @param {Request} req - Request - This is the request object that is passed to the route handler.
 * @param {Response} res - Response - This is the response object that will be sent back to the client.
 * @returns The result of the createUser function.
 */
export const saveUser = async (req: Request, res: Response) => {
  try {
    const result = await createUser(req.body);
    return res.send({ ok: true, message: "User created successfully", result });
  } catch (error) {
    return res.send({ ok: false, message: "cannot create user", error });
  }
};

/**
 * This is an asynchronous function that searches for a user based on a name query parameter and
 * returns a response with the search result.
 * @param {Request} req - The `req` parameter is an object that represents the HTTP request made to the
 * server. It contains information about the request such as the request method, headers, URL, query
 * parameters, and body.
 * @param {Response} res - `res` is an object representing the HTTP response that will be sent back to
 * the client. It contains methods for setting the response status, headers, and body. In this case,
 * the `send` method is used to send a JSON response with either a successful `result` or an empty
 * array
 * @returns The function `findUser` is returning a Promise that resolves to a response object with a
 * boolean `ok` property and a `result` property. If the `searchUser` function is successful, the
 * `result` property will contain the search results. If there is an error, the `result` property will
 * be an empty array.
 */
export const findUser = async (req: Request, res: Response) => {
  try {
    const result = await searchUser(String(req.query.name) || "");
    return res.send({ ok: true, result });
  } catch (error) {
    return res.send({ ok: false, result:[] });
  }
};
