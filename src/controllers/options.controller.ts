import { Request, Response } from "express";
import { get_options, save_options } from "../services/common/options.service";

/**
 * This function saves an option and returns a success message or an error message.
 * @param {Request} req - Request object containing information about the HTTP request made by the
 * client.
 * @param {Response} res - `res` is an object representing the HTTP response that will be sent back to
 * the client. It contains methods and properties that allow the server to send data, headers, and
 * status codes to the client.
 * @returns a response to the client. If the `save_options` function is successful, it will return an
 * object with `ok` set to `true`, a success message, and the result of the `save_options` function. If
 * there is an error, it will return an object with `ok` set to `false` and an error message.
 */
export const saveOption = async (req: Request, res: Response) => {
  try {
    const result = await save_options(req.body);
    return res.send({
      ok: true,
      message: "Option created successfully",
      result,
    });
  } catch (error) {
    return res.send({ ok: true, message: "Cannot create option" });
  }
};

export const getOptions = async (_: Request, res: Response) => {
  try {
    const result = await get_options();
    return res.send({ result, ok: true });
  } catch (error) {
    return res.send({ ok: false });
  }
};
