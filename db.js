const mongoose = require('mongoose');
const URI = 'mongodb+srv://Mario:halloween@cluster0.rl3le.mongodb.net/halloween?retryWrites=true&w=majority';
mongoose.Promise = global.Promise;
//'mongodb://localhost:27017/dieta'
mongoose.connect(URI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
},err => {
    if (!err) console.log('Se ha conectado con mongodb');
    else console.log('Erro de conexcion'+ err);
        
    
})

module.exports = mongoose;