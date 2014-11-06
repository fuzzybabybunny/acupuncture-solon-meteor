var patient1Id, patient2Id, dictor1Id;

if (Meteor.users.find().count() === 0) {

  Meteor.users.insert({
    username: 'admin',
    email: 'none@none.com',
    password: '123456',
    profile: {
        firstName: 'Admin',
        lastName: 'Account',
        role: 'admin'
    }
  });

  dictor1Id = Meteor.users.insert({
    username: 'doctor',
    email: 'doctor@none.com',
    password: '123456',
    profile: {
        firstName: 'Zheng-Ping',
        lastName: 'Chen',
        role: 'doctor'
    }
  });

  patient1Id = Meteor.users.insert({
    username: 'johnsmith',
    email: 'john@none.com',
    password: '123456',
    profile: {
        firstName: 'John',
        lastName: 'Smith',
        middle_name: 'Mallory',
        homePhone: '440-333-3333',
        workPhone: '440-444-4444',
        cellPhone: '440-222-2222',
        address1: '1234 Main St.',
        address2: 'Apt 1',
        city: 'Solon',
        state: 'OH',
        zipcode: '44023',
        occupation: 'Engineer',
        employer: 'BIC',
        relationships: 'Single',
        emergencyName: 'Tom Smith',
        emergencyPhone: '440-222-2221',
        referralName: 'Dr. Karen Smith',
        referralPhone: '440-111-1111',
        role: 'patient'
    }
  });

  patient2Id = Meteor.users.insert({
    username: 'janesmith',
    email: 'jane@none.com',
    password: '123456',
    profile: {
        firstName: 'Jane',
        lastName: 'Smith',
        middle_name: 'Mallory',
        homePhone: '440-333-3333',
        workPhone: '440-444-4444',
        cellPhone: '440-222-2222',
        address1: '1234 Main St.',
        address2: 'Apt 1',
        city: 'Solon',
        state: 'OH',
        zipcode: '44023',
        occupation: 'Teacher',
        employer: 'Solon Schools',
        relationships: 'Single',
        emergencyName: 'Tom Smith',
        emergencyPhone: '440-222-2221',
        referralName: 'Dr. Karen Smith',
        referralPhone: '440-111-1111',
        role: 'patient'
    }
  });

};

if (Appointments.find().count() === 0) {

  Appointments.insert({
    date: new Date('2014/01/23'),
    patientId: patient1Id,
    doctorId: dictor1Id,
    reason: 'Headaches',
    treatment: 'lorem ipsum',
    notes: 'lorem ipsum',
    price: 8500,
    transactionId: ''
  });

  Appointments.insert({
    date: new Date('2014/01/27'),
    patientId: patient1Id,
    doctorId: dictor1Id,
    reason: 'Headaches',
    treatment: 'lorem ipsum',
    notes: 'lorem ipsum',
    price: 8500,
    transactionId: ''
  });

  Appointments.insert({
    date: new Date('2014/02/02'),
    patientId: patient2Id,
    doctorId: dictor1Id,
    reason: 'Smoking',
    treatment: 'lorem ipsum',
    notes: 'lorem ipsum',
    price: 8500,
    transactionId: ''
  });

  Appointments.insert({
    date: new Date('2014/02/03'),
    patientId: patient2Id,
    doctorId: dictor1Id,
    reason: 'Smoking',
    treatment: 'lorem ipsum',
    notes: 'lorem ipsum',
    price: 8500,
    transactionId: ''
  });

};


// Fixture data 
if (Posts.find().count() === 0) {
  var now = new Date().getTime();
  
  // create two users
  var tomId = Meteor.users.insert({
    profile: { name: 'Tom Coleman' }
  });
  var tom = Meteor.users.findOne(tomId);
  var sachaId = Meteor.users.insert({
    profile: { name: 'Sacha Greif' }
  });
  var sacha = Meteor.users.findOne(sachaId);
  
  var telescopeId = Posts.insert({
    title: 'Introducing Telescope',
    userId: sacha._id,
    author: sacha.profile.name,
    url: 'http://sachagreif.com/introducing-telescope/',
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 2,
    upvoters: [], votes: 0
  });
  
  Comments.insert({
    postId: telescopeId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'Interesting project Sacha, can I get involved?'
  });
  
  Comments.insert({
    postId: telescopeId,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'You sure can Tom!'
  });
  
  Posts.insert({
    title: 'Meteor',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://meteor.com',
    submitted: new Date(now - 10 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [], votes: 0
  });
  
  Posts.insert({
    title: 'The Meteor Book',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://themeteorbook.com',
    submitted: new Date(now - 12 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [], votes: 0
  });
  
  for (var i = 0; i < 10; i++) {
    Posts.insert({
      title: 'Test post #' + i,
      author: sacha.profile.name,
      userId: sacha._id,
      url: 'http://google.com/?q=test-' + i,
      submitted: new Date(now - i * 3600 * 1000 + 1),
      commentsCount: 0,
      upvoters: [], votes: 0
    });
  };
};