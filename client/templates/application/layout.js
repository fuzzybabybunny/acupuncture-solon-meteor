Template.layout.rendered = function(){

	var scripts = '<!-- Javascript files -->\
	<!-- Custom scripts -->\
	<script src="/assets/javascript/custom.js"></script>';

	$('tail').append(scripts);
};

Template.loading.destroyed = function(){

};

// This needs to be here because page-transitions and startup-kit need jumbotron to be rendered first.
// Template.jumbotron.rendered = function(){
// 	// console.log("rendered!");
// 	$('head').append('<script src="/assets/startup/common-files/js/page-transitions.js"></script>');
// 	$('head').append('<script src="/assets/startup/common-files/js/startup-kit.js"></script>');
// 	if( $('#pt-main .control-next') ){
// 		var animateJumbotron = function(){ 
// 			$('#pt-main .control-next').click(); 
// 		};
// 		window.setInterval(animateJumbotron, 4000);
// 	};

// };

// Template.blog.rendered = function(){

// 	$('head').append('<script src="/assets/startup/common-files/js/page-transitions.js"></script>');
// 	$('head').append('<script src="/assets/startup/common-files/js/startup-kit.js"></script>');

// }