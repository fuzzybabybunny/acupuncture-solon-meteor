TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Books = new Tabular.Table({
  name: "BookList",
  collection: AppointmentSubmissions,
  columns: [
    {data: "patient.firstName", title: "First Name"}
  ]
});