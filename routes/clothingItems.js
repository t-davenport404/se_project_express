const itemRouter = require("express").Router();
const auth = require("../middlewares/auth");
const {
  getItems,
  createItem,
  getItem,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItems");

itemRouter.get("/", getItems);
itemRouter.get("/:itemId", getItem);

itemRouter.use(auth);

itemRouter.post("/", createItem);
itemRouter.delete("/:itemId", deleteItem);
itemRouter.put("/:itemId/likes", likeItem);
itemRouter.delete("/:itemId/likes", dislikeItem);

module.exports = itemRouter;
