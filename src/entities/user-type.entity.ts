import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps: true,
    tableName: "users_types",
})
export class UserType extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true
    })
    idUserType: number

    @Column({
        type: DataType.STRING
    })
    typeName: string
}