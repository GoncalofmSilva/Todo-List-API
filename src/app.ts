import express from "express"
import authRouter from "./routes/authRoute.js"
import todoRouter from "./routes/todoRoute.js"


const app = express()

//Middlewares
app.use(express.json())

//Routes
app.use('/', authRouter)
app.use('/', todoRouter)

export default app