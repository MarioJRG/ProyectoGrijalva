const forlogin = {};
const mongoose = require('mongoose');
const db = require('../db');

var login = require('../models/formulario.model');

forlogin.register= (req,res)=>{ 

    res.render('registro');

   
};
forlogin.list= (req,res)=>{ 

    res.render('login');

   
};

forlogin.authenticate= (req, res)=>{
    const {correo,password} = req.body

    login.findOne({correo},(err,user)=>{
        if (err){
            
           
            req.flash('success','Error en el login');
            res.redirect('/')
        }else if(!user){
            
            
            req.flash('success','Error en el login');
            res.redirect('/')
        }else{
            
            login.findOne({password},(err,result)=>{
                if (err){
                   
                    
                    req.flash('success','Error en el login');
                    res.redirect('/')
                }else  if (result){
                    res.status(500).send('usuario autenticado ');
                }else{
                    

                    req.flash('success','Error en el login');
                    res.redirect('/')
                }
            });
        }
    });
    
};

module.exports= forlogin;