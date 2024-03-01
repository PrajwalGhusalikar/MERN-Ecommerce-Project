const jwt = require("jsonwebtoken");
const SECRET_KEY = "ajnjkfsjkfjksnfkjasnkja";

const generateToken = async ({ userId }) => {
  const token = jwt.sign({ userId }, SECRET_KEY, { expiresIn: "24h" });
  return token;
};

const getUserIdFromToken = (token) => {
  const decodedToken = jwt.verify(token, SECRET_KEY);
  return decodedToken.userId; //Note after why userId
};

module.exports = { generateToken, getUserIdFromToken };
