import { Menu } from "../../entities/menu.entity";
import { User } from "../../entities/user.entity";
import { MenuOptions } from "../../types/options.types";
import { get_options_by_menu } from "./options.service";

/**
 * This function saves a menu for a specific user.
 * @param  - The function `save_menu` takes an object as its parameter with a single property `idUser`
 * which is a number. The function creates a new record in the `Menu` table with the `idUser` value and
 * returns the result. The function is marked as `async` which means it returns a
 * @returns The function `save_menu` is returning the result of creating a new `Menu` object with the
 * provided `idUser` value. The exact content of the `result` object depends on the implementation of
 * the `Menu` model and the database being used, but it likely includes information such as the ID of
 * the newly created menu and any default values or timestamps set by the model.
 */
export const save_menu = async ({ idUser }: { idUser: number }) => {
  const result = await Menu.create({ idUser });
  return result;
};

/**
 * This function retrieves menus and their options from a database, and returns them in an array.
 * @returns The function `get_menu_and_options` returns an array of `MenuOptions` objects. If there are
 * no results, it returns an empty array.
 */
export const get_menu_and_options = async () => {
  const result = await Menu.findAll({
    include: { model: User, attributes: { exclude: ["password"] } },
  });
  if (result.length > 0) {
    const new_arr: MenuOptions[] = [];
    for (let i = 0; i < result.length; i++) {
      const options = await get_options_by_menu(result[i].idMenu);
      new_arr.push({
        idMenu: result[i].idMenu,
        idUser: result[i].idUser,
        createdAt: result[i].createdAt,
        updatedAt: result[i].updatedAt,
        user: result[i].user,
        options,
      });
    }
    return new_arr;
  }
  return [];
};

export const get_menu_and_options_by_user = async (id: number) => {
  const result = await Menu.findOne({
    include: {
      model: User,
      attributes: { exclude: ["password"] },
      where: { idUser: id },
    },
  });
  if (result) {
    const options = await get_options_by_menu(result.idMenu);
    const data = {
      idMenu: result.idMenu,
      idUser: result.idUser,
      createdAt: result.createdAt,
      updatedAt: result.updatedAt,
      user: result.user,
      options,
    };
    return data;
  }
  return {};
};
