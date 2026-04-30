const itemRouter = require("express").Router();
const {
  getItems,
  createItem,
  getItem,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItems");

itemRouter.get("/", getItems);
itemRouter.post("/", createItem);

itemRouter.put("/:itemId/likes", likeItem);
itemRouter.delete("/:itemId/likes", dislikeItem);

itemRouter.get("/:itemId", getItem);
itemRouter.delete("/:itemId", deleteItem);

module.exports = itemRouter;
