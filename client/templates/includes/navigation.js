Template.Navigation.helpers({
  activeRouteClass: function(/* route names */) {
    var args = Array.prototype.slice.call(arguments, 0);
    args.pop();
    
    var active = _.any(args, function(name) {
      return Router.current() && Router.current().route.getName() === name
    });
    
    return active && 'active';
  }
});

Template.Navigation.rendered = function(){

	$('a').on('click', function(){
	  if($(this).attr('href').indexOf('#')>-1) {
	    event.preventDefault();
	    var id = $(this).attr("href");
	    var top = $(id).offset().top;
	    $("html, body").animate({
	      scrollTop: top
	    }, 500); // you can set any time here
	  }
	});

}