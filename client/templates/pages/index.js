Template.index.rendered = function(){
	var scripts = '<!-- Javascript files -->\
	<!-- Custom scripts -->\
	<script src="/assets/javascript/gmaps.js"></script>\
	<script src="/assets/javascript/custom.js"></script>';

	$('tail').append(scripts);
  console.log('yield rendered and the number of DOM nodes: ', document.getElementsByTagName('*').length );
};

Template.index.events({

	'click #ZPModalButton': function(){
		$('#ZPModal').modal('toggle');
	},

	'click #ZPModalLink': function(){
		$('#ZPModal').modal('toggle');
	}

})