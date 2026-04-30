const {
  getItems,
  createItem,
  getItem,
  updateItem,
  deleteItem,
} = require("../controllers/clothingItems");

const itemRouter = require("express").Router();

itemRouter.get("/", getItems);
itemRouter.get("/:itemId", getItem);
itemRouter.post("/", createItem);
itemRouter.put("/:itemId", updateItem);
itemRouter.delete("/:itemId", deleteItem);

module.exports = itemRouter;
