Template.AppointmentShow.rendered = function(){

	var patientId = this.data.patientId;
	var patient = Meteor.users.findOne(patientId);

};

Template.AppointmentShow.helpers({

	'patient': function(){
		return Meteor.users.findOne(this.patientId);
	}

});