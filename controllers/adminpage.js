
const {sequelize, Admin} = require('../models');
const loginpage=(req, res) => {
  res.render("loginpage", {PageTitle:"Login", invalid:false});
  };
const validator=(req,res,next)=>{
    
    username=req.body.username
    password=req.body.password
    
    Admin.findAll({where: {name: username}}).then(async (user)=>{
        if(user[0]!=null){
        console.log(user[0].password)
        bcrypt.compare(password, user[0].password).then((result)=>{
            if(result) {
                req.session.user=user[0]
                req.session.isLoggedIn=true
                console.log(user[0].name)
                req.session.id=user[0].id
                
                req.session.username=user[0].name
                return res.redirect('/')
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
module.exports = {
    loginpage: loginpage,
    validator: validator,
  };