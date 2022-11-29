const express = require('express');
const weatherController = require('../controller/weather.controller');
const router = express.Router();
router.get('/home',weatherController.home);
router.post('/weathercheck',weatherController.weathercheck)
module.exports = router;