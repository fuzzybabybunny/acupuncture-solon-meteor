Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { 
    return [
      Meteor.subscribe('notifications')
    ]
  }
});

var requireLogin = function() {
  if (! Meteor.user()) {
    debugger
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      console.log("no user");
      this.render('AdminLogin');
    }
  } else {
    this.next();
  }
};

Router.onBeforeAction('dataNotFound', {only: ['postPage', 'AppointmentShow']});
Router.onBeforeAction(requireLogin, {only: ['AdminMain', 'postSubmit', 'appointmentsList', 'AppointmentShow']});


PostsListController = RouteController.extend({
  template: 'postsList',
  increment: 5, 
  postsLimit: function() { 
    return parseInt(this.params.postsLimit) || this.increment; 
  },
  findOptions: function() {
    return {sort: this.sort, limit: this.postsLimit()};
  },
  subscriptions: function() {
    this.postsSub = Meteor.subscribe('posts', this.findOptions());
  },
  posts: function() {
    return Posts.find({}, this.findOptions());
  },
  data: function() {
    var hasMore = this.posts().count() === this.postsLimit();
    return {
      posts: this.posts(),
      ready: this.postsSub.ready,
      nextPath: hasMore ? this.nextPath() : null
    };
  }
});

NewPostsController = PostsListController.extend({
  sort: {submitted: -1, _id: -1},
  nextPath: function() {
    return Router.routes.newPosts.path({postsLimit: this.postsLimit() + this.increment})
  }
});

BestPostsController = PostsListController.extend({
  sort: {votes: -1, submitted: -1, _id: -1},
  nextPath: function() {
    return Router.routes.bestPosts.path({postsLimit: this.postsLimit() + this.increment})
  }
});

Router.route('/', {
  name: 'index'
});

Router.route('/test', {
  name: 'test'
});

Router.route('/admin', {
  name: 'AdminMain',
  layoutTemplate: 'AdminLayout',
  waitOn: function(){
    debugger
    return [
      // Meteor.subscribe("allPatients"),
      Meteor.subscribe("appointments")
    ]  
  }
});

Router.route('/admin/appointment/:_id', {
  name: 'AppointmentShow',
  waitOn: function(){
    return [
      Meteor.subscribe("userAppointment", this.params._id)
    ]
  },
  data: function(){
    var appointmentId = this.params._id;
    if (appointment = Appointments.findOne(appointmentId)){
      // var  appointment = Appointments.findOne(appointmentId);
      return { 
        appointment: appointment,
        patient: Meteor.users.findOne(appointment ? appointment.patientId : null) 
      }
    } else {
      return null
    };
  }
});

Router.route('/admin/appointment/:_id/edit', {
  name: 'AppointmentEdit',
  waitOn: function(){
    return [
      Meteor.subscribe("userAppointment", this.params._id)
    ]
  },
  data: function(){
    // var appointmentId = this.params.id;
    // var patientId = Appointments.findOne(appointmentId).patientId;
    // debugger
    return Appointments.findOne(this.params._id);
      // patient: Meteor.users.findOne(Appointments.findOne(appointmentId).patientId)
  }
});

Router.route('/appointments', {
  name: 'appointmentsList'
});

Router.route('/appointment/new', {
  name: 'insertAppointmentForm'
});

Router.route('/blog', {
  name: 'blog',
  controller: NewPostsController
});

Router.route('blog/new/:postsLimit?', {name: 'newPosts'});

Router.route('blog/best/:postsLimit?', {name: 'bestPosts'});


// Router.route('blog/posts/:_id', {
//   name: 'postPage',
//   waitOn: function() {
//     return [
//       Meteor.subscribe('singlePost', this.params._id),
//       Meteor.subscribe('comments', this.params._id)
//     ];
//   },
//   data: function() { return Posts.findOne(this.params._id); }
// });

// Router.route('blog/posts/:_id/edit', {
//   name: 'postEdit',
//   waitOn: function() { 
//     return Meteor.subscribe('singlePost', this.params._id);
//   },
//   data: function() { return Posts.findOne(this.params._id); }
// });

// Router.route('blog/submit', {name: 'postSubmit'});

