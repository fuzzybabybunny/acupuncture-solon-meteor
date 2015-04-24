this.sendEmail = function(to, fromEmail, subject, htmlText) {
    return Meteor.Mandrill.send({
        to: to,
        from: fromEmail,
        subject: subject,
        html: htmlText
    });
};

sendEmail('victor@victorlinphoto.com', 'admin@acupuncturecleveland.com', 'Something something', 'Some kind of message content lala.');