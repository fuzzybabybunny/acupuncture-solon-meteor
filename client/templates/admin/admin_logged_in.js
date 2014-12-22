Template.AdminLoggedIn.rendered = function(){



};

Template.AdminLoggedIn.events({
	'click #logout': function(){
		Meteor.logout();
	}
});

Template.AdminLoggedIn.helpers({

	settings: function() {
	  return {
	    rowsPerPage: 10,
	    showFilter: true,
	    fields: [
		    { key: 'firstName', label: 'First Name' },
		    { key: 'lastName', label: 'Last Name' },
		    { key: 'reason', label: 'Reason' },
		    { key: 'date', label: 'Date' },
	    ]
	  };
	},

  myCollection: function () {
    var appointments = Appointments.find().fetch();
    for(index in appointments){
    	var userId = appointments[index].patientId;
    	appointments[index].firstName = Meteor.users.findOne(userId).profile.firstName;
    	appointments[index].lastName = Meteor.users.findOne(userId).profile.lastName;
    };
    console.log(appointments);
    return appointments;
  }

});
