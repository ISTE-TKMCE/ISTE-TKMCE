const router = require("express").Router();
const homecontroller = require("../controllers/homepage")
const ignitecontroller = require("../controllers/ignite")
const admincontroller = require("../controllers/adminpage")
router.get("/", homecontroller.homepage)
router.get("/login", admincontroller.loginpage)
router.get("/ignite", ignitecontroller.ignite)
router.post("/login", admincontroller.validator)
router.post("/sub", (req, res) => {
  res.json({ message: "message send" });
});



module.exports = router;
