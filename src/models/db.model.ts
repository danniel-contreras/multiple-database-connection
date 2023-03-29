import { Sequelize, ModelAttributes, ModelOptions } from "sequelize";

export class DatabaseConnection {
    constructor(database: string) {
        this.databaseName = database
    }

    databaseName: string
    sequelize: Sequelize
    /**
     * It connects to the database and returns a promise.
     */
    async connect() {
        this.sequelize = new Sequelize({
            database: this.databaseName,
            host: "127.0.0.1",
            password: "password",
            username: "root",
            port: 3306,
            dialect: "mysql",
            logging: false
        })
        try {
            await this.sequelize.authenticate();
            console.log("Connection has been established successfully.")
        } catch (error) {
            console.error("Unable to connect to the database:", error);
        }
    }
   /**
    * This function takes in a model name, model attributes, and model options, and returns a sequelize
    * model.
    * @param {string} modelname - The name of the model. The model will be stored in
    * `this.sequelize.models` under this name.
    * @param {ModelAttributes} attributes - This is an object that contains the attributes of the
    * model.
    * @param {ModelOptions} options - {
    * @returns The sequelize.define method returns a Model.
    */
    defineModel(modelname: string, attributes: ModelAttributes, options: ModelOptions) {
        return this.sequelize.define(modelname, attributes, options)
    }
}