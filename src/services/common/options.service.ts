import { MenuOptions } from "../../entities/menu-option";
import { Menu } from "../../entities/menu.entity";
import { Options } from "../../entities/options.entity";
import { OptionsI } from "../../types/options.types";

/**
 * This function saves options by creating a new record in the Options table with the provided values.
 * @param {OptionsI} values - OptionsI is likely an interface or type definition for an object that
 * contains options or settings for a particular application or feature. The `save_options` function
 * takes in an object of this type as its parameter, which is then spread into a new object and passed
 * to the `create` method of an object
 * @returns The function `save_options` is returning the result of creating a new `Options` object with
 * the provided `values`. The return value is not specified in the code snippet, but it is likely a
 * Promise that resolves to the newly created `Options` object.
 */
export const save_options = async (values: OptionsI) => {
  const result = await Options.create({ ...values });
  return result;
};

/**
 * This function retrieves options associated with a specific menu ID and includes their associated
 * pages.
 * @param {number} id - The `id` parameter is a number that represents the ID of a menu. This function
 * retrieves all the options associated with the menu that has the specified ID.
 * @returns The function `get_options_by_menu` is returning a Promise that resolves to an array of
 * `Options` objects that have a foreign key `idMenu` matching the input `id`, and include the
 * associated `Pages` object.
 */
export const get_options_by_menu = async (id: number) => {
  const result = await Options.findAll({
    where: { idMenu: id },
  });
  return result;
};

/**
 * This function retrieves all options from a database table called "Options".
 * @returns The function `get_options` is returning the result of a database query using Sequelize ORM
 * to retrieve all records from the `Options` table. The result is an array of objects representing the
 * records.
 */
export const get_options = async () => {
  const result = await Options.findAll();
  return result;
};

/**
 * This function retrieves menu options with their associated options based on a given menu ID.
 * @param {number} idMenu - The id of the menu for which the options are being retrieved.
 * @returns The function `get_options_menu` is returning a Promise that resolves to an array of
 * objects. Each object represents a `MenuOptions` instance that has an associated `Options` instance
 * through a foreign key relationship. The objects contain the properties of both the `MenuOptions` and
 * `Options` instances.
 */
export const get_options_menu = async (idMenu: number) => {
  const menu = await MenuOptions.findAll({
    where: { idMenu },
    include: [
      {
        model: Options,
      },
    ],
  });
  return menu;
};
