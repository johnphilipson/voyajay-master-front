var localStrategy = require ("passport-local").Strategy;
var mysql = require("mysql");
var bcrypt = require("bcrypt-nodejs");
var dbcofig = require("./config.js");

var connection = mysql.createConnection(dbcofig,connection);

connection.query('Use '+dbcofig.database);

module.exports = function(passport){
    passport.SerializeUser(function(user ,done){
        done(null, user.id);
    });

passport.desirializeUser(function(id, done){
connection.query("SELECT * FROM signup Where id = ?", [id],
function(err,rows){
done(err, rows[0]);
});
});

passport.use(
    'local-signup',
    user.bcrypt
)
}
