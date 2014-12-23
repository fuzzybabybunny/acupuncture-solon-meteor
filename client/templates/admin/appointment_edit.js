Template.AppointmentEdit.rendered = function(){

	var patientId = this.data.patientId;
	var patient = Meteor.users.findOne(patientId);

};

Template.AppointmentEdit.helpers({

	'patient': function(){
		return Meteor.users.findOne(this.patientId);
	}

});