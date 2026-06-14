const router = require("express").Router();
const clothingItem = require("./clothingItems");
const userRouter = require("./users");
const { login, createUser } = require("../controllers/users");
const auth = require("../middlewares/auth");
const NotFoundError = require("../errors/not-found-error"); // Import your error class

const {
  validateUserBody,
  validateAuthentication,
} = require("../middlewares/validation");

router.post("/signin", validateAuthentication, login);
router.post("/signup", validateUserBody, createUser);

router.use("/items", clothingItem);

router.use(auth);

router.use("/users", userRouter);

router.use((req, res, next) => {
  next(new NotFoundError("Router not found"));
});

module.exports = router;
