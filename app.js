import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
import User from "./routes/userRoute.js"

const app = express()
 
 

// Middleware
app.use(cors())
app.use(cookieParser());
app.use(express.json());  

app.use("/",User) 

// exporting 
export { app }