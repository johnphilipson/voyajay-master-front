var express = require('express');
var router = express.Router();
const pool = require('./../config');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

router.get('/register', function (req, res) {
  res.send('test')
})

router.post('/register', async function (req, res) {  
  const selectquery = await pool.query("select * from signup");
  console.log("query",selectquery)
  const{fname, lname, dob, address, home, relationship, occupation, education, email, phone, aboutus}=req.body
  const inserQuery = await pool.query("INSERT INTO signup (`fname`, `lname`, `age` ,`address`,`home`,`relationship`,`occupation`,`education`,`email`,`phone`,`aboutus`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",[fname, lname, dob.replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$1-$2"), address, home, relationship, occupation, education, email, phone, aboutus]);  
  res.render('success', { title: 'Express' });
})


router.get('/privacy', function (req, res) {
  res.render('privacy')
})


router.get('/aboutus', function (req, res) {
  res.render('aboutus')
})

router.get('/legal', function (req, res) {
  res.render('legal')
})


module.exports = router;
