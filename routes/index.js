const router = require("express").Router();
const clothingItem = require("./clothingItems");
const userRouter = require("./users");
const { RESOURCE_NOT_FOUND } = require("../utils/errors");

router.use("/users", userRouter);
router.use("/items", clothingItem);

router.use((req, res) => {
  res.status(RESOURCE_NOT_FOUND).send({ message: "Router not found" });
});

module.exports = router;
