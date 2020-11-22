const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;


const db = require('./db');
const balanceRoutes = require('./routes/formulario');

//middlewares
app.use(session({
    secret:'formulario',
    resave: false,
    saveUninitialized:false,
    store: new MongoStore({mongooseConnection:db.connection})
    
}));
app.use(flash());
//configuracion de express
app.use(express.urlencoded( { extended:false }))
app.use(express.json())


app.use((req, res, next)=>{
    
   res.locals.success= req.flash('success');
 
    
    next();
});

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//routes
app.use('/',balanceRoutes);
//estaticos
app.use(express.static(path.join(__dirname,'public')));

app.listen(port, ()=> console.log(`El servidor iniciado en el pueto ${port}`))