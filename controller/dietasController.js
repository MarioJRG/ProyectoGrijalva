const forDieta = {};
const mongoose = require('mongoose');
const db = require('../db');

var  Dieta = require('../models/dieta.model');

forDieta.verlist = (req, res)=>{
    Dieta.find({usuario:req.user._id},(err,dietas)=>{
        if(err)console.log('Error: '+err)
        res.render('principal',{
            dieta:dietas
        });
        
    })
}

forDieta.saveDieta= (req,res)=>{
    var newDieta = Dieta({
        comida:req.body.comida,
        carbohidratos:req.body.carbohidratos,
        grasas:req.body.grasas,
        proteina:req.body.proteina,
        eliminado:1,
        usuario:req.user._id

    });
    

    newDieta.save((err,dietasaved)=>{
        if(err) console.log(err) ;
        console.log('Guardado con Exito. ',dietasaved);
        res.redirect('/principal')
    })
}
forDieta.delete=(req,res)=>{
    Dieta.findById({_id:req.params.id},(err,dieta)=>{
        if(err) console.log(err);

        dieta.eliminado = 2

        dieta.save((err,dietasaved)=>{
            if(err) console.log(err)
            res.redirect('/principal')
        })
    })
}

forDieta.edit= (req,res)=>{
    Dieta.findById({_id:req.params.id},(err,dieta)=>{
        if(err) console.log(err);

       
            dieta.comida= req.body.comida,
            dieta.carbohidratos=req.body.carbohidratos,
            dieta.grasas=req.body.grasas,
            dieta.proteina = req.body.proteina
    
            
        dieta.save((err,dietasaved)=>{
            if(err) console.log(err);
            res.redirect('/principal')
            
        })
    });
}

module.exports= forDieta;
