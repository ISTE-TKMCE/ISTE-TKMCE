const express  = require("express");
const app = express();
const db = require("./models");
const morgan = require('morgan');

//rourtes import
const mainRoutes = require('./routes/main');


//server setup
const port = process.env.PORT|| 3000;
app.set('view engine','ejs');


//middleware
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));

//routes
app.use('/',mainRoutes);


//404
app.use((req, res) => {
    res.send('404 not found , oops!')
});


app.listen(port, () => {
    console.log('app now listening for requests on port 3000');
});

