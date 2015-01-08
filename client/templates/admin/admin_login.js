Template.AdminLogin.rendered = function(){

	$('form').submit(function(e){
		e.preventDefault();
		var login = $('form').serializeObject();
		Meteor.loginWithPassword(login.username, login.password, function(error){
			if(error){
				Errors.insert(error);
			} else {
				Router.go('/admin');
			}
		});
	});

};