
const userService = require("../Services/userService")

const getUserProfile = async (req, res) => {
  try {
    const jwt = req.headers.authorization?.split(" ")[1];
    if (!jwt) {
      return res.status(404).send({ error: "token not found" });
    }

    const user = await userService.getUserProfileByToken(jwt)
    return res.status(200).send(user)
  } catch (error) {
    throw new Error({error:error.message, errormsg :"Internel Error"})
  }
};

const getAllUsers = async (req, res) => {
    try {
      
  
      const users = await userService.getAllUsers()
      return res.status(200).send(users)
    } catch (error) {
      throw new Error({error:error.message, errormsg :"Internel Error"})
    }
  };
module.exports= {getAllUsers, getUserProfile}