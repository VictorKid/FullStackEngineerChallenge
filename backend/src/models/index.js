const { Sequelize, DataTypes } = require("sequelize");
const debug = require("debug");

const log = debug("sql");
const DATABASE_URL = "postgres://localhost:5432/paypay";

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  logging: log,
});

const models = {
  Users: require("./users")(sequelize, DataTypes),
  Reviews: require("./reviews")(sequelize, DataTypes),
};

Object.values(models).forEach((model) => {
  if ("associate" in model) {
    model.associate(models);
  }
});

module.exports = {
  models,
  sequelize,
};
