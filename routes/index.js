var express = require('express');
var router = express.Router();
var db = require('../lib/db')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
});

module.exports = router;
