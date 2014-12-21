Meteor.methods({

	'findUser': function(userId){
		return Meteor.users.find(userId).fetch();
	}


});