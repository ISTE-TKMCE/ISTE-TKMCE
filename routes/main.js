const router = require("express").Router();
const homecontroller = require("../controllers/homepage")
const ignitecontroller = require("../controllers/ignite")
const admincontroller = require("../controllers/adminpage")
router.get("/", homecontroller.homepage)
router.get("/execom21-22", (req,res,next)=>{
  res.render('execom21-22', {PageTitle: 'Execom_21-22'})
})
router.get("/login", admincontroller.loginpage)
router.get("/ignite", ignitecontroller.ignite)
router.post("/login", admincontroller.validator)
router.get('/addevent', admincontroller.addevent)
router.post('/addevent',admincontroller.EventAdd)
router.post('/makeprevious', admincontroller.makeprevious)
router.post('/deletevent', admincontroller.deleteevent)
router.get('/logout',async (req,res,next)=>{
  req.session.destroy()
  res.redirect('/')
})
router.post("/sub", (req, res) => {
  res.json({ message: "message send" });
});



module.exports = router;
