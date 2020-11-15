//TODO import express
const express = require("express");
const app = express();

//TODO setting port
app.set("port", process.env.PORT || 3000);

//TODO Middlewares
app.use(express.json());

//TODO importing route
const staffRouters = require("./routes/StaffRoute");

//TODO Route
app.use("/staff", staffRouters);

app.use("/test", (req, res) => {
  res.send("Test Route");
});

app.use("/", (req, res) => {
  res.send("Hello Tuan");
});

app.listen(app.get("port"), () => {
  console.log("Starting server");
});
