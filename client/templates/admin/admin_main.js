Template.AdminMain.rendered = function(){



};

Template.AdminMain.events({

  'click .reactive-table tr': function(event) {
    var appointment = this;
    Router.go('/admin/appointment/' + appointment._id);
  }

});

Template.AdminMain.helpers({

	settings: function() {
	  return {
	    rowsPerPage: 10,
	    showFilter: true,
	    fields: [
		    { key: 'firstName', label: 'First Name' },
		    { key: 'lastName', label: 'Last Name' },
		    { key: 'reason', label: 'Reason' },
		    { key: 'date', label: 'Date', fn: function(value){
		    	return moment(value).format('MM-DD-YY, h:mm a');
		    } },
	    ]
	  };
	},

  appointments: function () {
    var appointments = Appointments.find().fetch();
    for(index in appointments){
    	var userId = appointments[index].patientId;
    	appointments[index].firstName = Meteor.users.findOne(userId).profile.firstName;
    	appointments[index].lastName = Meteor.users.findOne(userId).profile.lastName;
    };
    return appointments;
  }

});
