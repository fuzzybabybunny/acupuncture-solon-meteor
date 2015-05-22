// Template.Layout.rendered = function(){

// 	console.log( 'layout.rendered and the number of DOM nodes: ', document.getElementsByTagName('*').length );
// };


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

Meteor.startup(function() {
  $('html').attr('lang', 'en');
});