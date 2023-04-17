import { Request, Response } from "express";
import { save_menu_options } from "../services/common/menu-options.service";
import { get_options_menu } from "../services/common/options.service";

export const saveMenuOptions = async (req: Request, res: Response) => {
  try {
    const result = await save_menu_options(req.body);
    return res.send({
      result,
      ok: true,
      message: "Option menu created successfully",
    });
  } catch (error) {
    return res.send({ message: "Cannot create options menu", ok: false });
  }
};

export const getMenuOptions = async (req: Request, res: Response) => {
  try {
    const result = await get_options_menu(Number(req.params.id));
    return res.send({ result });
  } catch (error) {
    return res.send({ error });
  }
};
