const Sequelize = require("sequelize");
var sequelize = require("./database");

//TODO Role for FK roleId
var Role = require("./Role");

//TODO nametable
var nametable = "staff";

var Staff = sequelize.define(nametable, {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  address: Sequelize.STRING,
  phone: Sequelize.BIGINT,

  roleId: {
    type: Sequelize.INTEGER,
    // this is reference to another model
    reference: {
      model: Role,
      key: "id",
    },
  },
});

Staff.belongsTo(Role);

module.exports = Staff;
