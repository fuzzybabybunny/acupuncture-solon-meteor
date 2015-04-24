
// process.env.MAIL_URL = 'smtp://victor@victorlinphoto.com:uwCFgPa5BHWpmkqfN9HF3Q@smtp.mandrillapp.com:587/';
// console.log('this is the mail_url: ', process.env.MAIL_URL);

// Sets the MAIL_URL variable
Meteor.Mandrill.config({
  username: "victor@victorlinphoto.com",
  key: "uwCFgPa5BHWpmkqfN9HF3Q"
});