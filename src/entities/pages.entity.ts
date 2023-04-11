import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps: true,
    tableName: "pages",
})
export class Pages extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
        allowNull: false
    })
    idPage!: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    pageName!: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    pagePath!: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    pageURI!: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    meta!: string
}