const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');

const MongoStore = require('connect-mongo')(session);
const bcrypt = require('bcryptjs');
const passport = require('passport');
const cookieParser = require('cookie-Parser');
const passportLocal = require('passport-local').Strategy;
var login = require('../models/formulario.model');
var  Dieta = require('../models/dieta.model');

const app = express();
const port = process.env.PORT || 8080;


const db = require('../db');
const balanceRoutes = require('../routes/formulario');

//middlewares

app.use(flash());
//configuracion de express
app.use(express.urlencoded( { extended:true }));
app.use(express.json());

app.use(cookieParser('formulario'));
app.use(session({
    secret:'formulario',
    resave: true,
    saveUninitialized:true,
    store: new MongoStore({mongooseConnection:db.connection})
    
}));
app.use(passport.initialize());
app.use(passport.session());



passport.use(new passportLocal({
    usernameField: 'correo',
    passwordField: 'password'
  },async (correo,password,done)=>{
        const user = await login.findOne({correo});
        const contra = await login.findOne({correo});
        if(!user){
            return done(null,false,{message:'not user find'});
        }else{
            const macht = await user.matchPassword(password);
            if(macht){
                return done (null,user);
            }else {
                return done(null,false,{message:'incorrect password'});
            }
        }
  }));

passport.serializeUser((user,done)=>{
    done (null,user.id);
});
    
passport.deserializeUser((id,done)=>{
    login.findById(id,(err,user)=>{
        done(err,user);
    })
});


app.use((req, res, next)=>{
    
   res.locals.success= req.flash('success');
   res.locals.error= req.flash('error');
   res.locals.user = req.user || null;
    
    next();
});

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//routes
app.use('/',balanceRoutes);
app.get('/principal',(req,res,next)=>{
    if(req.isAuthenticated()){

        return next();
    }
    res.redirect('/');
}
,(req,res)=>{
    Dieta.find({usuario:req.user._id},(err,dietas)=>{
        if(err)console.log('Error: '+err)
        res.render('principal',{
            dieta:dietas
        });
        
    })
    //res.render('principal')
})

app.get('/',(req,res,next) =>{
if(req.isAuthenticated()){
    res.redirect('/principal');
}
res.render('inicio');
})  
app.post('/login',passport.authenticate('local',{
    successRedirect:"/principal",
    failureRedirect:"/",
    failureFlash:true
}));

//estaticos
app.use(express.static(path.join(__dirname,'public')));

app.listen(port, ()=> console.log(`El servidor iniciado en el pueto ${port}`))