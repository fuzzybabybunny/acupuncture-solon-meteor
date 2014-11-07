var nodemailer = Nodemailer;

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport("SMTP", {
  service: 'Gmail',
  auth: {
    user: 'victor@victorlinphoto.com',
    pass: '4r5t6y7u4r5t6y7u'
  }
});

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
  from: 'Fred Foo ✔ <foo@blurdybloop.com>', // sender address
  to: 'victor@victorlinphoto.com', // list of receivers
  subject: 'Hello ✔', // Subject line
  text: 'Hello world ✔', // plaintext body
  html: '<b>Hello world ✔</b>' // html body
};

Meteor.methods({

  'sendEmail': function() {
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Message sent: ' + info.response);
      }
    });
  }


});
// send mail with defined transport object
