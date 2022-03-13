const router = require("express").Router();
const homecontroller = require("../controllers/homepage")
const ignitecontroller = require("../controllers/ignite")
router.get("/", homecontroller.homepage)

router.get("/ignite", ignitecontroller.ignite)

router.post("/sub", (req, res) => {
  res.json({ message: "message send" });
});



module.exports = router;
