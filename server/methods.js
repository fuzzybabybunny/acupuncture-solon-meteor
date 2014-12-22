Meteor.methods({

	findUser: function(userId){
		check(userId, String);
		return Meteor.users.findOne(userId);
	}


});