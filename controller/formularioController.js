const forformulario = {};
const mongoose = require('mongoose');
const db = require('../db');

var formulario = require('../models/formulario.model');
forformulario.list= (req,res)=>{ 

    res.render('registro')

   
};
forformulario.save= (req,res)=>{
    var newformulario = formulario({
        nombre:req.body.nombre,
        apellidos:req.body.apellidos,
        correo:req.body.correo,
        password:req.body.password
    });

    newformulario.save((err,formulariosaved)=>{
        if(err) console.log(err);
        console.log('Guardado con Exito. ',formulariosaved);
        res.redirect('/')
    })
}


module.exports= forformulario;