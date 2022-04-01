const express  = require("express");
const app = express();
const morgan = require('morgan');
const {sequelize} = require('./models');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var options = {
	host: process.env.DB_HOST,
	
	user: process.env.DB_USER,
	password:  process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
    
};
var sessionStore = new MySQLStore(options);
app.use(session({
    secret: 'Hey we are iste', resave: false, saveUninitialized: false,store: sessionStore
}))
//rourtes import
const mainRoutes = require('./routes/main');
const mailerRoutes = require('./routes/mailer');
const subRoutes = require('./routes/sub');



//server setup
const port = process.env.PORT|| 3000;
app.set('view engine','ejs');


//middleware
app.use(morgan('dev'));
app.use(express.json());

app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));

//routes
app.use('/',mainRoutes);
app.use('/mail',mailerRoutes);
app.use('/sub',subRoutes);


//404
app.use((req, res) => {
    res.send('404 not found , oops!')
});



async function main (){
    await sequelize.sync();
    app.listen(port, () => {
        console.log('app now listening for requests on port 3000');
    });
}
main();


