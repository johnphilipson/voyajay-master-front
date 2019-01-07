var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP",{
    host: 'email-smtp.us-east-1.amazonaws.com',
    port: 25,
    secure: true,
    auth: {
        user: "AKIAJU7J6MISHK2HZM3Q",
        pass: "lJAGnEQaCtU8or+5g8/KcDJJQhtq1vq/j6GqERzjq6C"
    }
});


var mailOptions = {
    from: "john@voyajay.com", 
    to: "manish.sharma@saachitech.com", 
    subject: "Hello", 
    text: "Hello world ", 
    html: "<b>Hello world </b>"
}

smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

});
