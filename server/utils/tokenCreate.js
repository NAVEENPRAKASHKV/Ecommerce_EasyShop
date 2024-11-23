const jwt = require("jsonwebtoken");

module.exports.createToken = async (data) => {
  const token = await jwt.sign(data, process.env.JWT_SECRET_KEY, {
    expiresIn: "7d",
  });
  return token;
};
