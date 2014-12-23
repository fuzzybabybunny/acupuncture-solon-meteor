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
  return Appointments.find();
});

Meteor.publish('appointmentSubmissions', function() {
  return AppointmentSubmissions.find();
});

Meteor.publish('users', function() {
  return Meteor.users.find({}, {fields:{profile: true}});
});

Meteor.publish('userAppointment', function(appointmentId){
  check(appointmentId, String);
  var userId = Appointments.findOne(appointmentId).patientId;
  return [
    Appointments.find({_id: appointmentId}),
    Meteor.users.find({_id: userId}, {fields: {profile: true, emails: true}})
  ];
});