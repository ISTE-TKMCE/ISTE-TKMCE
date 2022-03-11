const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/ignite",(req,res,next)=>{
  res.render("ignite")
})

router.post("/sub", (req, res) => {
  res.json({ message: "message send" });
});



module.exports = router;
