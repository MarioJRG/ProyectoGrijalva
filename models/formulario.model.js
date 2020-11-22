const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds= 10;

const registroSchema = new mongoose.Schema({
 nombre : {type: String, required:true},
 apellidos:{type:String,required:true},
 correo: {type:String,unique:true,required:true  },
 password:{type:String,required:true}
 
});
//registroSchema.pre('save',function (next){
   // if(this.isNew || this.isModified('password')){
     //   const document= this;
//
    //    bcrypt.hash(document.password,saltRounds,(err,hashedPassword)=>{
     //       if (err){
              //  next(err);
     //       }else{
     //           document.password=hashedPassword;
     //           next();
     //       }
     //   });
   // }else {
   //     next();
   // }
//});


//registroSchema.methods.correctPassword = function(candidatePassword,callback){
  //  bcrypt.compare(candidatePassword,this.password, function (err,same){
    ////    if (err){
        //    callback(err)
        //}else{
          //  callback(err,same);
        //}
    //});
//}
module.exports= mongoose.model('Registro',registroSchema);
