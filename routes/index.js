var express = require('express');
var router = express.Router();
const pool = require('./../config');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Voyajay',sucess:false });
});

router.get('/privacy', function (req, res) {
  res.render('privacy')
})

router.get('/about', function (req, res) {
  res.render('about')
})

router.get('/legal', function (req, res) {
  res.render('legal')
})

router.post('/', async function (req, res) {    
 const selectquery = await pool.query("select * from voyajayform");
  const{fname, lname, email, date, address, home, relationship, occupation, education,  phone, aboutus}=req.body
  const inserQuery = await pool.query("INSERT INTO voyajayform (`fname`, `lname`, `email`, `date` ,`address`,`home`,`relationship`,`occupation`,`education`,`phone`,`aboutus`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",[fname, lname, email, date.replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$1-$2"), address, home, relationship, occupation, education, phone, aboutus]);
  res.render('index', { title: 'Express',sucess:true });
})

module.exports = router;
