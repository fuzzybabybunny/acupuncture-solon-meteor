Meteor.publish('posts', function(options) {
  check(options, {
    sort: Object,
    limit: Number
  });
  return Posts.find({}, options);
});

Meteor.publish('singlePost', function(id) {
  check(id, String);
  return Posts.find(id);
});


Meteor.publish('comments', function(postId) {
  check(postId, String);
  return Comments.find({postId: postId});
});

Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId, read: false});
});

Meteor.publish('appointments', function() {
  if (Roles.userIsInRole(this.userId, ['assistant','admin'])) {
    return Appointments.find();
  } else {
    return [];
  }
});

Meteor.publish('appointmentSubmissions', function() {
  return AppointmentSubmissions.find();
});

Meteor.publish('users', function() {
  return Meteor.users.find({}, {fields: {profile: true, emails: true, roles: true, username: true}});
});

Meteor.publish('patientsForDoctor', function(doctorId) {
  return Meteor.users.find({}, {fields: {profile: true, emails: true, roles: true, username: true}});
});

Meteor.publish('allPatients', function() {
  if (Roles.userIsInRole(this.userId, ['assistant','admin'])) {
    return Meteor.users.find({roles: 'patient'}, {fields: {profile: true, emails: true, roles: true, username: true}});
  } else {
    return [];
  }
});

Meteor.publish('userAppointment', function(appointmentId){
  check(appointmentId, String);
  if (Appointments.findOne(appointmentId)){
    var userId = Appointments.findOne(appointmentId).patientId;
    return [
      Appointments.find({_id: appointmentId}),
      Meteor.users.find({_id: userId}, {fields: {profile: true, emails: true, roles: true, username: true}})
    ];
  } else {
    return [];
  }

});