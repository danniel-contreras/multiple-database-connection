import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Menu } from "./menu.entity";
import { Options } from "./options.entity";
@Table({
  timestamps: true,
  tableName: "menu_options",
})
export class MenuOptions extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    autoIncrementIdentity: true,
    allowNull: false,
  })
  idMenuOptions!: number;

  @ForeignKey(() => Menu)
  idMenu!: number;

  @BelongsTo(() => Menu)
  menu!: Menu;

  @ForeignKey(() => Options)
  idOption!: number;

  @BelongsTo(() => Options)
  option!: Options;
}
