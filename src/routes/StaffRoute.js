const express = require("express");
const router = express.Router();

const StaffController = require("../controller/StaffController");
router.get("/test", StaffController.test);

router.get("/save", (req, res) => {
  res.json({ status: "Staff saved" });
});

module.exports = router;
