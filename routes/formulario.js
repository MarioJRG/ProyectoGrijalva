const express = require('express');
const forFormulario=require('../controller/formularioController');
const router = express.Router();
const forLogin=require('../controller/loginController');


//router.get('/',forFormulario.list);
router.post('/add',forFormulario.save);
router.get('/registro',forLogin.register);
router.get('/',forLogin.list);
router.post('/login',forLogin.authenticate);

module.exports = router;