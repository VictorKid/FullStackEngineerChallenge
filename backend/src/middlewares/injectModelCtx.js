const { models } = require("../models");

module.exports = (req, res, next) => {
  if (!req.context) {
    req.context = {};
  }
  req.context.models = models;

  next();
};
