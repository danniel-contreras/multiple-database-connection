import { Request, Response } from "express";
import {
  get_menu_and_options,
  get_menu_and_options_by_user,
  get_pages_by_user,
  save_menu,
} from "../services/common/menus.service";

/**
 * This function saves a menu and returns a success message or an error message.
 * @param {Request} req - Request object which contains the HTTP request information such as headers,
 * body, and parameters.
 * @param {Response} res - `res` is an object representing the HTTP response that will be sent back to
 * the client. It contains methods and properties that allow the server to send data back to the
 * client, such as `send()` which sends a response of various types, such as JSON, plain text, HTML,
 * etc.
 * @returns a response to the client. If the `save_menu` function is successful, it will return a JSON
 * object with the `result`, `ok`, and `message` properties. If there is an error, it will return a
 * JSON object with the `ok` and `message` properties.
 */
export const saveMenu = async (req: Request, res: Response) => {
  try {
    const result = await save_menu(req.body);
    return res.send({ result, ok: true, message: "Menu created successfully" });
  } catch (error) {
    return res.send({ ok: false, message: "Cannot create menu" });
  }
};

/**
 * This function retrieves menus and their options and sends them as a response in a JSON format.
 * @param {Request} req - Request object which contains information about the incoming HTTP request
 * such as headers, query parameters, and body.
 * @param {Response} res - `res` is an object representing the HTTP response that will be sent back to
 * the client. It contains methods for sending the response, such as `send()`, `json()`, `status()`,
 * etc. In this code snippet, `res.send()` is used to send the response back to
 * @returns The function `getMenus` is returning a Promise that resolves to a response object with a
 * JSON body containing either an array of menu items and their options (if the `get_menu_and_options`
 * function call is successful), or an empty array (if there is an error). The response object also
 * includes a boolean `ok` property indicating whether the operation was successful or not.
 */
export const getMenus = async (req: Request, res: Response) => {
  try {
    const result = await get_menu_and_options();
    return res.send({ ok: true, result });
  } catch (error) {
    return res.send({ ok: false, resut: [] });
  }
};

export const getMenusByUser = async (req: Request, res: Response) => {
  try {
    const result = await get_menu_and_options_by_user(Number(req.params.id));
    return res.send({ ok: true, result });
  } catch (error) {
    return res.send({ ok: false, resut: [] });
  }
};

export const getPagesByUser = async (req: Request, res: Response) => {
  try {
    const result = await get_pages_by_user(Number(req.params.id));
    return res.send({ ok: true, result });
  } catch (error) {
    return res.send({ ok: false, resut: [] });
  }
};
