const router = require("express").Router();
const mailController = require('../controllers/mailController')

router.get("/", (req, res) => {
  res.send("mailer rote");
});
router.post("/", mailController.sendmail);

module.exports = router;
