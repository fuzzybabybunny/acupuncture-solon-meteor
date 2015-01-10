Template.Contact.events({

	'submit #contact-form': function(e){
		e.preventDefault();
		$('#contact-form button').empty();
		$('#contact-form button').append('<i class="fa fa-cog fa-spin"></i> Wait...');
		var formContents = $('form#contact-form').serializeObject();
		Meteor.call('sendContactEmail', formContents, function(error, result){
			if(!error){
				$('#contact-form')[0].reset();
				$('#contact-form button').empty();
				$('#contact-form button').append('<i class="fa fa-bullhorn icon-before"></i> Send it');
				alert('Thank you for your inquiry! We will get back to you shortly.')
			} else {
				$('#contact-form button').empty();
				$('#contact-form button').append('<i class="fa fa-bullhorn icon-before"></i> Send it');
				alert('There was a connection error with your submission. Please try again.');
			}
		});

	}

});