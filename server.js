const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = 3000;

const db = require('./db');
const balanceRoutes = require('./routes/formulario');
//configuracion de express
app.use(express.urlencoded( { extended:false }))
app.use(express.json())

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//routes
app.use('/',balanceRoutes);
//estaticos
app.use(express.static(path.join(__dirname,'public')));

app.listen(port, ()=> console.log(`El servidor iniciado en el pueto ${port}`))