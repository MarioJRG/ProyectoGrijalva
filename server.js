const express = require('express');
const mysql = require('mysql');
const myConn = require('express-myconnection');
const path = require('path');

const app = express();

//importar rutas
const userFor = require('./routes/formulario');
const { urlencoded } = require('express');

//Configuracion
app.set('port',process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));


//Base de datos
app.use(myConn(mysql,{
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users',
    port: 3306
}, 'single'));

app.use(express.urlencoded({extended: false}));

//Rutas
app.use('/',userFor);


//Archivos Estaticos
app.use(express.static(path.join(__dirname,'public')));


//app.get('/', (req, res) => res.send('Hello World!'))
app.listen(app.get('port'), () => console.log(`Example app listening on port port!`))