import { STRING, INTEGER, Model, ModelStatic } from "sequelize";

import { DatabaseConnection } from "./db.model";
import { UserI } from '../types/user.types';

export class UserModel {
    constructor(database: string) {
        this.connect(database)
    }

    dbContext: DatabaseConnection

    /**
     * This function connects to a database and returns a database connection object.
     * @param {string} database - The name of the database to connect to.
     */
    private connect(database: string) {
        this.dbContext = new DatabaseConnection(database)
        this.dbContext.connect()
        this.define()
    }

    User: ModelStatic<Model<UserI>>

    /**
     * This function defines a model called 'Users' with three columns: userId, userName, and
     * userLastname. The userId column is the primary key and is auto-incrementing. The userName and
     * userLastname columns are not nullable.
     */
    private define() {
        this.User = this.dbContext.defineModel("Users", {
            userId: { type: INTEGER, primaryKey: true, autoIncrementIdentity: true, autoIncrement: true, allowNull: false },
            userName: { type: STRING, allowNull: false },
            userLastname: { type: STRING, allowNull: false },
            address: { type: STRING, allowNull: false },
            phoneNumber: { type: INTEGER, allowNull: false },
            email: { type: STRING, allowNull: false, unique: true },
            password: { type: STRING, allowNull: false }
        }, {
            createdAt: false,
            updatedAt: false,
            deletedAt: false
        })

        this.User.sync().then(() => {
            console.log("Users table created");
        }).catch((error) => {
            console.log("unable to create Users table, ", error)
        })
    }
}
