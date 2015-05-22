Meteor.methods({

	findUser: function(userId){
		check(userId, String);
		return Meteor.users.findOne(userId);
	},

	sendContactEmail: function(contents){
		check(contents, Object);
		// console.log(contents);
    return Meteor.Mandrill.send({
        to: 'admin@acupuncturecleveland.com',
        from: contents.c_email,
        subject: contents.c_subject,
        html: 'A new message has been sent by ' + contents.c_name + ' and they were referred by: ' + contents.c_referral + '<br /><br />' + contents.c_message
    });
	}


});