import { Options } from "../../entities/options.entity";
import { Pages } from "../../entities/pages.entity";
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
    include: { model: Pages },
  });
  return result;
};
