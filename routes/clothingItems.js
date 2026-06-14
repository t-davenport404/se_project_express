const itemRouter = require("express").Router();
const auth = require("../middlewares/auth");
const {
  getItems,
  createItem,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItems");

const { validateCardBody, validateId } = require("../middlewares/validation");

itemRouter.get("/", getItems);

itemRouter.use(auth);

itemRouter.post("/", validateCardBody, createItem);
itemRouter.delete("/:itemId", validateId, deleteItem);
itemRouter.put("/:itemId/likes", validateId, likeItem);
itemRouter.delete("/:itemId/likes", validateId, dislikeItem);

module.exports = itemRouter;
