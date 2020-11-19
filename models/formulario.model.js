const mongoose = require('mongoose');

const registroSchema = new mongoose.Schema({
 nombre : {type: String, required:true},
 apellidos:{type:String,required:true},
 correo: {type:String,required:true},
 password:{type:String,required:true}
 
});

module.exports= mongoose.model('Registro',registroSchema);