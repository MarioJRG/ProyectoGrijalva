const express = require('express');
const forFormulario=require('../controller/formularioController');
const router = express.Router();


router.get('/',forFormulario.list);
router.post('/add',forFormulario.save);

module.exports = router;