import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app= express()
app.use(cors(
   {
     origin:process.env.CORS_ORIGIN,
     credentials:true
    }
))

app.use(cookieParser())
app.use(express.json());

import UserRouter from "./Routes/user.route.js";
import authRoutes from "./Routes/auth.route.js"
app.use("/api/v1/users",UserRouter)
app.use("/auth",authRoutes)


export {app}