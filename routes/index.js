const router = require("express").Router();
const { celebrate, Joi } = require("celebrate"); // 1. Import Celebrate and Joi
const clothingItem = require("./clothingItems");
const userRouter = require("./users");
const { login, createUser } = require("../controllers/users");
const auth = require("../middlewares/auth");
const { RESOURCE_NOT_FOUND } = require("../utils/errors");

router.post(
  "/signin",
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  }),
  login
);

router.post(
  "/signup",
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required().min(2).max(30),
      avatar: Joi.string().required().uri(),
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  }),
  createUser
);

router.use("/items", clothingItem);

router.use(auth);

router.use("/users", userRouter);

router.use((req, res) => {
  res.status(RESOURCE_NOT_FOUND).send({ message: "Router not found" });
});

module.exports = router;
