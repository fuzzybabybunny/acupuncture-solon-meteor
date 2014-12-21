Template.AdminLoggedIn.events({
	'click #logout': function(){
		Meteor.logout();
	}
});