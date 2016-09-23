var express = require('express');
var router = express.Router();
var mysql = require('../lib/db.js')
var conn = mysql.con;

/*
var mysql      = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : "temp"
});

conn.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + conn.threadId);
});
*/


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/test',function(req,res){
	conn.query("select * from user",function(err,result){
		if (err){
			res.send(err);
		}
		//console.log(result)
		res.send(result)
	})
});

module.exports = router;
