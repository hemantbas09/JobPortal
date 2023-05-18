import jwt from "jsonwebtoken";
import userModel from "../Models/userModel.js";

var checkUserAuth = async (req, res, next) => {
  let token;

  // Get the header:
  const { authorization } = req.headers;

  // check the header is null or not:
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      // select token from header:
      token = authorization.split(" ")[1];

      // Verify token:
      const { userID } = jwt.verify(token, process.env.JWT_SECRET_KEY);

      // Get User from Token
      req.user = await userModel.findById(userID).select("-password");

      next();
    } catch (error) {
      res.status(401).send({
        status: "faild",
        message: "Unauthorized User",
      });
    }
  }

  if (!token) {
    res.status(401).send({
      status: "faild",
      message: "Unauthorized User, No Token",
    });
  }
};

export default checkUserAuth;
