const express = require("express");
const router = express.Router();

const StaffController = require("../controllers/StaffController");

router.get("/list", StaffController.list);

/*
router.get("/testdata", StaffController.testdata);

router.get("/test", StaffController.test);

router.get("/save", (req, res) => {
  res.json({ status: "Staff saved" });
});
*/
module.exports = router;
