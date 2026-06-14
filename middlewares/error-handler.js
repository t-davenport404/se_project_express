const { DEFAULT_SERVER_ERROR } = require("../utils/errors");

const errorHandler = (err, req, res, next) => {
  console.error(err);

  const statusCode = err.statusCode || DEFAULT_SERVER_ERROR;
  const message =
    statusCode === DEFAULT_SERVER_ERROR
      ? "An error has occurred on the server."
      : err.message;

  res.status(statusCode).send({ message });
};

module.exports = errorHandler;
