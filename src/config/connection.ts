import { Sequelize } from "sequelize-typescript";
import { User } from "../entities/user.entity";
import { UserType } from "../entities/user-type.entity";
import { Company } from "../entities/company.entity";
import { UserCompany } from "../entities/user-companies";
import { Options } from "../entities/options.entity";
import { Menu } from "../entities/menu.entity";
import { MenuOptions } from "../entities/menu-option";

const connection = new Sequelize({
  dialect: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "root",
  password: "password",
  database: "factura_common",
  logging: true,
  models: [UserType, User, Company, UserCompany, Menu, Options,MenuOptions],
});

export default connection;
