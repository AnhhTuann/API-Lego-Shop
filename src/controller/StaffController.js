const controllers = {};

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
