const express = require('express');
const forController=require('../controller/formularioController');
const router = express.Router();


router.get('/',forController.list);
router.post('/add',forController.add);

module.exports = router;