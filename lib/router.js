Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { 
    return [
      Meteor.subscribe('notifications'), 
      Meteor.subscribe('appointments'), 
      Meteor.subscribe('appointmentSubmissions')
    ]
  }
});

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
  onBeforeAction: function(){
    if (!Meteor.userId()) {
      // if the user is not logged in, render the Login template
      this.render('AdminLogin');
    } else {
      // otherwise don't hold up the rest of hooks or our route/action function
      // from running
      this.render('AdminLoggedIn');
    }
  },
  name: 'AdminLogin',
  layoutTemplate: 'AdminLayout',
  waitOn: function(){
    return Meteor.subscribe("users");
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


Router.route('blog/posts/:_id', {
  name: 'postPage',
  waitOn: function() {
    return [
      Meteor.subscribe('singlePost', this.params._id),
      Meteor.subscribe('comments', this.params._id)
    ];
  },
  data: function() { return Posts.findOne(this.params._id); }
});

Router.route('blog/posts/:_id/edit', {
  name: 'postEdit',
  waitOn: function() { 
    return Meteor.subscribe('singlePost', this.params._id);
  },
  data: function() { return Posts.findOne(this.params._id); }
});

Router.route('blog/submit', {name: 'postSubmit'});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
