const jwtProvider = require("../Configure/jwtProvider");
const userService = require("../Services/userService");
const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; //note
    if (!token) {
      return res.status(404).send("token not found");
    }
    const userId = await jwtProvider.getUserIdFromToken(token);
    console.log("user id in middlware", userId)
    const user = await userService.getUserById(userId);
    req.user = user; //pass to request
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
  next();
};

module.exports = authenticate;
