const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/dieta',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
},err => {
    if (!err) console.log('Se ha conectado con mongodb');
    else console.log('Erro de conexcion'+ err);
        
    
})

module.exports = mongoose;