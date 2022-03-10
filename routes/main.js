const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/sub", (req, res) => {
  res.json({ message: "message send" });
});



module.exports = router;
