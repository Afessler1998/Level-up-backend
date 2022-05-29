const jwt = require("jsonwebtoken");

async function authenticateUser(req, res, next) {
  const authorization = req.headers?.authorization;
  const authToken = authorization.split(" ")[1];
  jwt.verify(authToken, process.env.JWT_SECRET, (error, decoded) => {
    if (error) {
      throw new Error(error);
    }
    req.userId = decoded.id;
    next();
  });
}

module.exports = authenticateUser;
