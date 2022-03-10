const router = require("express").Router();
const { Subscriber } = require('../models')


router.post("/add", (req, res) => {

    Subscriber.create({
        email:req.body.email
    })
    .then(result => res.send("Subscription added" ))
    .catch(err =>{
        if(err.message=="Validation error"){
            res.send("Already subscribed" );
        }})

  
});


router.post("/remove", (req, res) => {
    //remove subscribtion
  });
  


module.exports = router;
