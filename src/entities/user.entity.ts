import { Table, Model, Column, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { UserType } from './user-type.entity';

@Table({
    timestamps: true,
    tableName: "users",
})
export class User extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
        allowNull: false
    })
    idUser!: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    userNames!: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    lastNames!: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    address!: string

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    phoneNumber!: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email!: string

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password!: string

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue:false
    })
    state!: boolean

    @ForeignKey(() => UserType)
    idUserType!: number

    @BelongsTo(() => UserType)
    userType!: UserType
}