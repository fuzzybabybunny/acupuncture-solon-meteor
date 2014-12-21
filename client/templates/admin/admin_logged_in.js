Template.AdminLoggedIn.events({
	'click #logout': function(){
		Meteor.logout();
	}
});

Template.AdminLoggedIn.rendered = function(){

	$('head').append('<link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.4/css/jquery.dataTables.css">');
	$('head').append('<script type="text/javascript" charset="utf8" src="//cdn.datatables.net/1.10.4/js/jquery.dataTables.js"></script>');

	var appointments = Appointments.find().fetch();

	for(index in appointments){
		var patient = appointments[index].patientId;
	};


  $('#table').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="appointments-table"></table>' );
  $('#appointments-table').dataTable( {
      "data": Appointments.find().fetch(),
      "columns": [
          { "data": "notes" },
          { "data": "price" },
          { "data": "reason" },
          { "data": "treatment" },
          { "data": "patientId" }
      ]
  } ); 

};