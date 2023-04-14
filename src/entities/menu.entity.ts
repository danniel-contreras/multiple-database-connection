import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { User } from "./user.entity";
@Table({
  timestamps: true,
  tableName: "menus",
})
export class Menu extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    autoIncrementIdentity: true,
    allowNull: false,
  })
  idMenu!: number;

  @ForeignKey(() => User)
  idUser!: number;

  @BelongsTo(() => User)
  user!: User;
}
