const controllers = {};

//TODO import model and sequelize
var sequelize = require("../model/database");
var Staff = require("../model/Staff");
var Role = require("../model/Role");

sequelize.sync();

controllers.list = async (req, res) => {
  const data = await Staff.findAll({
    include: [Role],
  })
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      return error;
    });
  res.json({ success: true, data: data });
};

/*
controllers.testdata = async (req, res) => {
  const response = await sequelize
    .sync()
    .then(function () {
      
      Role.create({
        role: "Aasdasd",
      });

      Staff.create({
        name: "Tuan",
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
*/
module.exports = controllers;
