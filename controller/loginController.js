const forlogin = {};
const mongoose = require('mongoose');
const db = require('../db');


forlogin.register= (req,res)=>{ 

    res.render('registro')

   
};
forlogin.list= (req,res)=>{ 

    res.render('login')

   
};


module.exports= forlogin;