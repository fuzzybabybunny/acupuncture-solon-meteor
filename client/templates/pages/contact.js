Template.Contact.events({

	'change #referral_list': function(){
		if ($('#referral_list').val() === 'Referring Doctor'){
			$('.hidden_input').hide();
			$('input[name="c_doctor_name"]').show();
		} else if ($('#referral_list').val() === 'Other (please specify)'){
			$('.hidden_input').hide();
			$('input[name="c_other_referrer"]').show();
		} else {
			$('input[name="c_doctor_name"]').val('');
			$('input[name="c_other_referrer"]').val('');
			$('.hidden_input').hide();
		}
	},

	'submit #contact-form': function(e){
		e.preventDefault();
		$('#contact-form button').empty();
		$('#contact-form button').append('<i class="fa fa-cog fa-spin"></i> Wait...');
		formContents = $('form#contact-form').serializeObject();
		formContents.c_message = formContents.c_message.replace(/\r?\n/g, '<br />');
		if (formContents.c_referral === 'Referring Doctor'){
			formContents.c_referral = "Dr. " + formContents.c_doctor_name;
		} else if (formContents.c_referral === 'Other (please specify)'){
			formContents.c_referral = formContents.c_other_referrer;
		};
		// console.log(formContents);
		Meteor.call('sendContactEmail', formContents, function(error, result){
			if(!error){
				$('#contact-form')[0].reset();
				$('#contact-form button').empty();
				$('#contact-form button').append('<i class="fa fa-bullhorn icon-before"></i> Send it');
				alert('Thank you for your inquiry! We will get back to you shortly.');
				// console.log(result);
			} else {
				$('#contact-form button').empty();
				$('#contact-form button').append('<i class="fa fa-bullhorn icon-before"></i> Send it');
				alert('There was a connection error with your submission. Please try again.');
			}
		});

	}

});

$('#list').change(function() {
    if ($(this).val() === '2') {
        // Do something for option "b"
    }
});

Template.Contact.rendered = function(){

//   AutoForm.addHooks(['tagForm', 'itemForm'], {
//     onSuccess: function(operation, result, template) {
//       console.log(result);
//     },
//    onError: function(operation, error, template) {
//      console.log(error);
//   }
// )};

	AutoForm.hooks({
	  contactForm: {
	    onSuccess: function(operation, result, template) {
	    	// console.log('operation: ', operation);
	    	// console.log('result: ', result);
	    	// console.log('template: ', template);
	      alert('Thank you for your inquiry! We will get back to you shortly.');
	    },
	   	onError: function(operation, error, template) {
	     	alert('There was an error with your submission. Please try again.');
	  	}
	  }
	});

	$(".hidden_input").hide();

};

Template.Contact.helpers({
  contactFormSchema: function() {
    return Schema.contact;
  }
});