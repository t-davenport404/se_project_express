const { RESOURCE_NOT_FOUND } = require("../utils/errors");

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = RESOURCE_NOT_FOUND;
  }
}

module.exports = NotFoundError;
