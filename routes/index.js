const router = require("express").Router();
const clothingItem = require("./clothingItems");
const userRouter = require("./users");
const { login, createUser } = require("../controllers/users");
const auth = require("../middlewares/auth");
const { RESOURCE_NOT_FOUND } = require("../utils/errors");

router.post("/signin", login);
router.post("/signup", createUser);
router.use("/items", clothingItem);

router.use(auth);

router.use("/users", userRouter);

router.use((req, res) => {
  res.status(RESOURCE_NOT_FOUND).send({ message: "Router not found" });
});

module.exports = router;
