import { MenuOptions } from "../../entities/menu-option";

export const save_menu_options = async (data: {
  idMenu: number;
  idOption: number
}) => {
  const result = await MenuOptions.create({ ...data });
  return result;
};