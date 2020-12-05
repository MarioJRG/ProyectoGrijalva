const express = require('express');
const forFormulario=require('../controller/formularioController');
const router = express.Router();
const forLogin=require('../controller/loginController');
const forDieta= require('../controller/dietasController');
const loginc= require('../controller/loginController');

//router.get('/',forFormulario.list);
//router.get('/principal',forDieta.verlist);
router.get('/dieta/delete/:id',forDieta.delete);
router.post('/dieta/edit/:id',forDieta.edit);
router.post('/add',forFormulario.save);
router.get('/registro',forLogin.register);
router.get('/loginview',loginc.list);
router.get('/logout',forLogin.logout);
router.post('/dieta/add',forDieta.saveDieta);
//router.get('/',forLogin.list);
//router.get('/principal',forLogin.principal)
//router.post('/login',forLogin.authenticate);

module.exports = router;