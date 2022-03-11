const express  = require("express");
const app = express();
const morgan = require('morgan');
const {sequelize} = require('./models');


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


