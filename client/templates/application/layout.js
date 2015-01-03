Template.layout.rendered = function(){
	// console.log("body contents on layout.rendered: ", $('body')[0]);
	$('head').append('<script src="/assets/javascript/svg-pan-zoom.min.js"></script>');
};

Template.loading.destroyed = function(){

	// console.log("destroyed!");
	// debugger;
};

Template.index.rendered = function(){
	$('head').append('<script src="/assets/startup/common-files/js/jquery-1.10.2.min.js"></script>');
	$('head').append('<script src="/assets/startup/common-files/js/jquery.bxslider.min.js"></script>');
	$('head').append('<script src="/assets/startup/common-files/js/jquery.scrollTo-1.4.3.1-min.js"></script>');
	$('head').append('<script src="/assets/startup/common-files/js/jquery.sharrre.min.js">');
	$('head').append('<script src="/assets/startup/flat-ui/js/bootstrap.min.js"></script>');
	$('head').append('<script src="/assets/startup/common-files/js/masonry.pkgd.min.js"></script>');
	$('head').append('<script src="/assets/startup/common-files/js/modernizr.custom.js"></script>');
	$('head').append('<script src="/assets/startup/common-files/js/easing.min.js"></script>');
	$('head').append('<script src="/assets/startup/common-files/js/jquery.svg.js"></script>');
	$('head').append('<script src="/assets/startup/common-files/js/jquery.svganim.js"></script>');
	$('head').append('<script src="/assets/startup/common-files/js/jquery.backgroundvideo.min.js"></script>');
	$('head').append('<script src="/assets/startup/common-files/js/froogaloop.min.js"></script>');
	// console.log("body contents on index.rendered: ", $('body')[0]);
	// console.log("#pt-main contents: ", $('#pt-main')[0]);

	$('head').append('<script src="/assets/startup/common-files/js/page-transitions.js"></script>');
  $('head').append('<script src="/assets/startup/common-files/js/startup-kit.js"></script>');

	
	
};

// On server startup, if the database is empty, create some initial data.
if (Meteor.isClient) {
  Meteor.startup(function () {
    // console.log("body contents on meteor.startup: ", $('body')[0]);
  });
}

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