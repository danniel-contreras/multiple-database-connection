import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "./user.entity";
import { Company } from "./company.entity";

@Table({
    timestamps: true,
    tableName: "users_companies",
})
export class UserCompany extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true
    })
    idUserCompany!: number

    @ForeignKey(() => User)
    idUser!: number

    @BelongsTo(() => User)
    user!: User

    @ForeignKey(() => Company)
    idCompany!: number

    @BelongsTo(() => Company)
    company!: Company
}