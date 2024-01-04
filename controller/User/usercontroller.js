import NodeCache from "node-cache";
import Trycatch from "../../middleware/Trycatch.js";
import User from "../../model/User/user.js";

// Get all users
const getAllUsers = Trycatch(async (req, res, next) => {
  const Allusers = await User.find();
  // console.log(Allusers);
  res.json({
    success: true,
    Allusers,
  });
});

export { getAllUsers };
