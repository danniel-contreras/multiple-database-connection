import express, { Application } from "express";
import { findUserByEmail, getAllUsers, loginUser } from './controllers/user.controller';
import morgan from "morgan"
import { auth } from "./utils/jwt";

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ limit: "50mb" }))
app.use(morgan("tiny"))

app.post("/", (_, res) => {
    res.send({ message: "Hello world" })
})

app.get("/users", auth,(req, res) => getAllUsers(req, res))

app.get("/user", (req, res) => findUserByEmail(req, res))

app.post("/login", (req, res) => loginUser(req, res))


app.listen(3006, () => {
    console.log("Server running at http://10.0.5.3:3006");
})