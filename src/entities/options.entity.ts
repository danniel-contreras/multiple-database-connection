import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
} from "sequelize-typescript";
import { Pages } from "./pages.entity";
import { Menu } from "./menu.entity";

@Table({
  timestamps: true,
  tableName: "options",
})
export class Options extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    autoIncrementIdentity: true,
    allowNull: false,
  })
  idOption!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  optionName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  optionIcon!: string;

  @ForeignKey(() => Pages)
  idPage!: number;

  @BelongsTo(() => Pages)
  page!: Pages;

  @ForeignKey(() => Menu)
  idMenu!: Menu;

  @BelongsTo(() => Menu)
  menu!: Menu;
}
