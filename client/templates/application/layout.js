Template.layout.created = function(){
	$('head').append('<script src="/assets/startup/common-files/js/jquery-1.10.2.min.js"></script>');
	$('head').append('<script src="/assets/startup/common-files/js/jquery.bxslider.min.js"></script>');
	$('head').append('<script src="/assets/startup/common-files/js/jquery.scrollTo-1.4.3.1-min.js"></script>');
	$('head').append('<script src="/assets/startup/common-files/js/jquery.sharrre.min.js">');
	// $('head').append('<script src="/assets/startup/flat-ui/js/bootstrap.min.js"></script>');
	$('head').append('<script src="/assets/startup/common-files/js/masonry.pkgd.min.js"></script>');
	$('head').append('<script src="/assets/startup/common-files/js/modernizr.custom.js"></script>');
	$('head').append('<script src="/assets/startup/common-files/js/page-transitions.js"></script>');
	$('head').append('<script src="/assets/startup/common-files/js/easing.min.js"></script>');
	$('head').append('<script src="/assets/startup/common-files/js/jquery.svg.js"></script>');
	$('head').append('<script src="/assets/startup/common-files/js/jquery.svganim.js"></script>');
	$('head').append('<script src="/assets/startup/common-files/js/jquery.backgroundvideo.min.js"></script>');
	$('head').append('<script src="/assets/startup/common-files/js/froogaloop.min.js"></script>');
};

Template.layout.rendered = function(){
	$('footer').append('<script src="/assets/startup/common-files/js/startup-kit.js"></script>');
};