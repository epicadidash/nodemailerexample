const nodemailer = require('nodemailer');
 const {config} = require(`dotenv`)
 config();
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tdash1688@gmail.com',
        pass: process.env.password
    }
});
 
let mailDetails = {
    from: 'tdash1688@gmail.com',
    to: 'dradwaitdash@gmail.com',
    subject: 'Test mail',
    text: 'Node.js testing mail by Adwait Dash'
};
 
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
    }
});