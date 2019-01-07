
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
