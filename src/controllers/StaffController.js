const controllers = {};

//TODO import model and sequelize
var sequelize = require("../model/database");
var Staff = require("../model/Staff");
var Role = require("../model/Role");

controllers.testdata = async (req, res) => {
  const response = await sequelize
    .sync()
    .then(function () {
      /*
      Role.create({
        role: "Aasdasd",
      });
      */
      Staff.create({
        name: "Vu",
        email: "asd",
        address: "asdasd",
        phone: "112332",
        roleId: 1,
      });

      const data = Staff.findAll();
      return data;
    })
    .catch((error) => {
      return error;
    });

  res.json({ success: true, data: response });
};

controllers.test = (req, res) => {
  const data = {
    name: "Tuan",
    age: 18,
    city: "HCM",
  };
  console.log("Execute from controller staff");
  res.json(data);
};

module.exports = controllers;
