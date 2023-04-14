import { MenuOptions } from "../../entities/menu-option";

export const save_menu_options = async (data: {
  idUser: number;
  idMenu: number;
}) => {
  const result = await MenuOptions.create({ ...data });
  return result;
};