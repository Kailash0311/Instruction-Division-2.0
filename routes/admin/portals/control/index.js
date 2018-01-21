var express = require('express');
var path = require('path');
var router = express.Router();
var fq = require('fuzzquire');

var holiday = require('./holiday.js');

router.use('/addHoliday', holiday);

router.get('/', function (req, res, next) {
    res.renderState('admin/portals/control');
});

module.exports = router;