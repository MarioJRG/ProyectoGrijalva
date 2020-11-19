const mongoose = require('mongoose');

const registroSchema = new mongoose.Schema({
 fecha : {type: String, required:true},
 descripcion:{type:String,required:true},
 cantidad: {type:Number,required:true},
 eliminado:{type:Number,required:false},
 tipo:{type: Number, required:true}
});

module.exports= mongoose.model('Registro',registroSchema);