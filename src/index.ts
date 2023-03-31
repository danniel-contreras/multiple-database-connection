import "reflect-metadata";
import express, { Application } from "express";
import morgan from "morgan"
import connection from './config/connection';
import routes from "./routes/router";

const app: Application = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ limit: "50mb" }))


app.use("/", routes)

app.get("/hello", (req,res) => { return res.send("hello") })

const start = async (): Promise<void> => {
    try {
        (await connection.sync()).authenticate().then(() => {
            app.listen(3006, () => {
                console.log("Server started at http://10.0.5.3:3006");
            });
        })
        // await connection.sync().then(() => console.log("success connection")).catch((error) => console.log("error: ", error));

    } catch (error) {
        console.error(error);
        // process.exit(1);
    }
};

void start();

