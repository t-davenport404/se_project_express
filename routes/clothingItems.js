const itemRouter = require("express").Router();
const {
  getItems,
  createItem,
  getItem,
  updateItem,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItems");

itemRouter.get("/", getItems);
itemRouter.post("/", createItem);

itemRouter.put("/:itemId/likes", likeItem);
itemRouter.delete("/:itemId/likes", dislikeItem);

itemRouter.get("/:itemId", getItem);
itemRouter.put("/:itemId", updateItem);
itemRouter.delete("/:itemId", deleteItem);

module.exports = itemRouter;
