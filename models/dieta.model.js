const mongoose = require('mongoose');



const dietaSchema = new mongoose.Schema({
    comida : {type: String, required:true},
 carbohidratos:{type:Number,required:true},
 grasas: {type:Number,required:true},
 proteina:{type:Number,required:true},
 eliminado:{type:Number,required:false},
 usuario:{type:String,required:true}
 
});

module.exports= mongoose.model('Dieta',dietaSchema);