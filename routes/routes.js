'use strict'

let express = require('express');
let rh = require('../routes/requestHandlers');
let router = express.Router();

router.get('/', rh.home)
router.get('/robots', rh.findRobot)
router.get('/newrobot', rh.createRobot)

module.exports = router;


