Meteor.methods({

	findUser: function(userId){
		check(userId, String);
		return Meteor.users.findOne(userId);
	},

	sendContactEmail: function(contents){
		check(contents, Object);
		var contents = contents;
		var mandrill = Npm.require('mandrill-api/mandrill');

		// Create a function to log the response from the Mandrill API
		// function log(obj) {
		//     $('#response').text(JSON.stringify(obj));
		// }

		// create a new instance of the Mandrill class with your API key
		var m = new mandrill.Mandrill('uwCFgPa5BHWpmkqfN9HF3Q');

		// create a variable for the API call parameters
		var params = {
		    "message": {
		        "from_email": contents.c_email,
		        "to":[{"email":"victor@victorlinphoto.com"}],
		        "subject": "Website inquiry from " + contents.c_name,
		        "text": contents.c_message
		    }
		};

		var sendTheMail = function() {
		// Send the email!

		  m.messages.send(params, function(res) {
		  	console.log(res);
		    return(res);
		  }, function(err) {
		    return(err);
		  });
		};

		sendTheMail();
	}


});