const forlogin = {};
const mongoose = require('mongoose');
const db = require('../db');

var login = require('../models/formulario.model');

forlogin.register= (req,res)=>{ 

    res.render('registro');

   
};
forlogin.principal=(req,res)=>{
    res.render('principal');
}
forlogin.list= (req,res)=>{ 

    res.render('login');

   
};
forlogin.logout=(req,res)=>{
    req.logout();
    res.redirect("/");
}



module.exports= forlogin;