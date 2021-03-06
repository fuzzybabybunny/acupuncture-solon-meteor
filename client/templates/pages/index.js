Template.index.rendered = function(){
	var scripts = '<!-- Javascript files -->\
	<!-- Custom scripts -->\
	<script src="/assets/javascript/gmaps.js"></script>\
	<script src="/assets/javascript/custom.js"></script>';

	$('tail').append(scripts);
  // console.log('yield rendered and the number of DOM nodes: ', document.getElementsByTagName('*').length );
};

Template.index.events({

	'click #ZPModalButton': function(){
		$('#ZPModal').modal('toggle');
	},

	'click #ZPModalLink': function(){
		$('#ZPModal').modal('toggle');
	},

	'click .portfolio-item': function(){
		$('#CaseStudyModal').modal('toggle');
	},

	'click #TestimonialModal-1-link': function(){
		$('#TestimonialModal-1').modal('toggle');
	},

	'click #TestimonialModal-2-link': function(){
		$('#TestimonialModal-2').modal('toggle');
	},

	'click #TestimonialModal-3-link': function(){
		$('#TestimonialModal-3').modal('toggle');
	},

	'click #TestimonialModal-4-link': function(){
		$('#TestimonialModal-4').modal('toggle');
	},

})