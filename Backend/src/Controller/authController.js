const userService = require("../Services/userService");
const jwtProvider = require("../Configure/jwtProvider");
const cartService = require("../Services/cartService");
const bcrypt = require("bcrypt");
const register = async (req, res) => {
  try {
    const user = await userService.createUser(req.body); // getting response of created user
    const jwt = await jwtProvider.generateToken(user._id);
    await cartService.createCart(user);
    return res.status(200).send({ jwt, message: "Register Successfull" });
  } catch (error) {
    return res
      .status(500)
      .send({ error: error.message, errormsg: "Internal error" });
  }
};

const login = async (req, res) => {
  const { password, email } = req.body;
  // console.log("password: ", password);
  try {
    const user = await userService.getUserByEmail(email);
    // console.log("user: : ", user);
    if (!user) {
      return res
        .status(404)
        .send({ message: "User not found with email : ", email });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("isPasswordValid: ", isPasswordValid);
    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid Password" });
    }

    const jwt = await jwtProvider.generateToken(user._id);

    return res.status(200).send({ jwt, message: "Login Successfull" });
  } catch (error) {
    return res
      .status(500)
      .send({ error: error.message, errormsg: "Internal error" });
  }
};
module.exports = { register, login };
