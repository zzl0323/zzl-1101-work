var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '182325',
    database:'11-1'
});
router.post('/shaixuan', function(req, res, next) {
	var con=req.body.con;
	console.log(con)
    connection.query('SELECT id,name,detail FROM work where name LIKE "%'+con+'%" OR detail LIKE "%'+con+'%"', function(err, rows, fields) {
    	res.header('Access-Control-Allow-Origin',"*")
        if (err) throw err;
        	res.send(rows);
    });
    
    
});

module.exports = router;




