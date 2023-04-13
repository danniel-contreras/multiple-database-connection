import { Menu } from "../entities/menu.entity";
import { Options } from "../entities/options.entity";
import { User } from "../entities/user.entity";

export interface OptionsI {
  optionName: string;
  optionIcon: string;
  idPage: number;
  idMenu: number;
}

export interface OptionsU {
  idOption: number;
  optionName: string;
  optionIcon: string;
  idPage: number;
  idMenu: number;
  updatedAt: string;
  createdAt: string;
}

export interface MenuOptions {
  idMenu: number;
  idUser: number;
  updatedAt: string;
  createdAt: string;
  user: User;
  options?: Options[];
}
