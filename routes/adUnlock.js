var express = require('express');
var router = express.Router();
var mysql = require('../lib/db.js')
var conn = mysql.con;


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/insertData',function(req,res){
  var rowData = {en: req.body.en, ts:req.body.ts};
	conn.query("insert into ad_unlock SET ?", rowData,function(err,result){
		if (err){
      console.log(err)
			res.send(err);
		}
		console.log(result)
		res.send(result)
	})
});

module.exports = router;
