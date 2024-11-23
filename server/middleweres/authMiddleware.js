const jwt = require("jsonwebtoken");

module.exports.authMiddleware = async (req, res, next) => {
  const accessToken =
    req.cookies.accessToken || req.headers.authorization?.split(" ")[1];

  if (!accessToken) {
    return res.status(401).json({ error: "Please log in first" });
  }

  try {
    const decodedToken = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    req.role = decodedToken.role;
    req.id = decodedToken.id;
    next();
  } catch (error) {
    return res.status(403).json({
      error: "Invalid or expired token. Please log in again.",
      message: error.message,
    });
  }
};
