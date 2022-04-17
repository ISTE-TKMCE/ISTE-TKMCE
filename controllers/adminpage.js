
const bcrypt=require('bcryptjs')
const {sequelize, Admin, Event} = require('../models');
const loginpage=(req, res) => {
  res.render("loginpage", {PageTitle:"Login", invalid:false});
  };
const validator=(req,res,next)=>{
    
    username=req.body.username
    password=req.body.password
    
    Admin.findAll({where: {name: username}}).then(async (user)=>{
        if(user[0].name==='ISTE'){
        
        bcrypt.compare(password, user[0].password).then((result)=>{
            if(result) {
                req.session.user=user[0]
                req.session.isLoggedIn=true
                
                req.session.id=user[0].id
                
                req.session.username=user[0].name
                return res.render('adminpage', {PageTitle:'Adminpage'})
            }
            else{
                const isLoggedIn= req.session.isLoggedIn===true
                res.render('loginpage',{PageTitle: 'Login', name: 'loginpage', isAuthenticated: isLoggedIn, invalid: true})
            }
        
    
        }).catch((err)=>console.log(err))
    }
    else{
        const isLoggedIn= req.session.isLoggedIn===true
        res.render('loginpage',{PageTitle: 'Login', name: 'loginpage', isAuthenticated: isLoggedIn, invalid: true})
        }
    })

}
const addevent=(req,res,next)=>{
    if(req.session.username==='ISTE'){
        res.render('addevent', {PageTitle: 'AddEvent'})
    }
    else{
        res.send('<h2>Go away and login as admin</h2>')
    }
}
const EventAdd=(req,res,next)=>{
    if(req.session.username==='ISTE'){
     
        var location='assets/images/'+req.file.originalname
        Event.create({
            name: req.body.name,
            date: req.body.date,
            description: req.body.description,
            active: true,
            reglink: req.body.regform,
            location: location
        }).then(()=>res.redirect('/')).catch(err=>console.log(err))
    }
    else{
        res.send('<h2>Go away</h2>')
    }
}
const makeprevious=(req,res,next)=>{
    Event.findOne({where: {name: req.body.name}}).then((event)=>{
        event.active=false
        event.save().then(res.redirect('/'))
    }).catch(err=>console.log(err))
}
const deleteevent=(req,res,next)=>{
    console.log(req.body.name)
    Event.findOne({where: {name: req.body.name}}).then((event)=>{
        Event.destroy({where: {id: event.id}}).then(()=>{res.redirect('/')})
        }
        ).catch(err=>console.log(err))
}
module.exports = {
    loginpage: loginpage,
    validator: validator,
    addevent: addevent,
    EventAdd: EventAdd,
    makeprevious: makeprevious,
    deleteevent: deleteevent
  };