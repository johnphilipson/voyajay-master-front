/*var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressBrute = require('express-brute');
var expressFlash = require('express-flash');
var expressSession = require('express-session');
var router = express.Router();


var urlencodedParser = bodyParser.urlencoded({extended:false});
var url = '';
module.exports = (function(app){
     console.log("bhai 1")
  app.get('/register',function(req,res){      
    console.log("bhai 2")
    res.render('register');
  });

  app.post('/register', function(req, res, next) {
console.log("test")
    
    res.render('register');
  /*  mysql.pool.query("INSERT INTO signup (`fname`, `lname`, `dob` ,`address`,`home`,`relationship`,`occupation`,`education`,`email`,`phone`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
        [req.body.fname, req.body.lname, req.body.dob, req.body.address, req.body.home, req.body.relationship, req.body.occupation, req.body.education, req.body.email, req.body.phone], function(err, result) {
            if (err) {
                next(err);
                return;
            }
    });
  });

});
*/
var express = require('express');
var router = express.Router();
var connection = require('./../config');

/* GET home page. */
router.get('/register', function(req, res, next) {
    res.render('register', { title: 'Express' });
  });


router.post('/register', function(req, res, next) {
    console.log("reg",req.body)
  res.render('success', { title: 'Express' });
});

module.exports = router;
