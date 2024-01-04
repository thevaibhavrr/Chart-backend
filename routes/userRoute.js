import express from "express"
import {  getAllUsers } from "../controller/User/usercontroller.js";
const User = express.Router()


// Get all users
User.route("/all-users").get(getAllUsers);

export default User 