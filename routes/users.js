const { getUsers, createUser, getUser } = require("../controllers/users");

const userRouter = require("express").Router();

userRouter.get("/", getUsers);
userRouter.get("/:userId", () => console.log("GET users by ID"));
userRouter.post("/", createUser);

module.exports = userRouter;
