AutoForm.hooks({
  appointmentSubmissionsForm: {
    before: {
      insert: function(doc, template) {
        console.log("This is the doc: ", doc);
        console.log("This is the template: ", template)
      },
    }
  }
});