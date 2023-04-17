import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Options } from "./options.entity";

@Table({
  timestamps: true,
  tableName: "sub_menus",
})
export class SubMenus extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    autoIncrementIdentity: true,
    allowNull: false,
  })
  idSubMenu!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  optionName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  optionIcon: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  path!: string;

  @ForeignKey(() => Options)
  idOption: number;

  @BelongsTo(() => Options)
  option: Options;
}
