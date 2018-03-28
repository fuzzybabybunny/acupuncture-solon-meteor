Meteor.methods({

	findUser: function(userId){
		check(userId, String);
		return Meteor.users.findOne(userId);
	},

	sendContactEmail: function(contents){

		check(contents, Schema.contact);

		// console.log(contents);

		if (!contents.doctorName){
			contents.doctorName = '';
		};

		if (!contents.specificReferral){
			contents.specificReferral = '';
		};

		contents.message = contents.message.replace(/\r?\n/g, '<br />');

    return Meteor.Mandrill.send({
      to: 'admin@acupuncturecleveland.com',
      from: 'contact-form@acupuncturecleveland.com',
      headers: {
        'Reply-To': contents.email
    	},
      subject: contents.subject,
      html: 'A new message has been sent by ' + contents.name + ' (' + contents.email + ') and they found us through: ' + contents.referral + ' ' + contents.doctorName + ' ' + contents.specificReferral + '<br /><br />Here is the original message: <br /><br />' + contents.message
    });

	}


});