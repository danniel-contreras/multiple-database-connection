import { Table, Model, Column, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";

@Table({
    timestamps: true,
    tableName: "companies",
})
export class Company extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
        allowNull: false
    })
    idCompany!: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    companyName!: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    companyDB!: string

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true
    })
    state!: string
}