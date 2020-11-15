var Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "lego_shop", //database
  "root", //user
  "password",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;
