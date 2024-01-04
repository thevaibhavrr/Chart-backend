import {app} from "./app.js"
import dotenv from "dotenv"
import {connectDb} from "./config/database.js"

// Load environment variables
dotenv.config();

// load database 
connectDb()

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });