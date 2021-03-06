Appointments = new Mongo.Collection('appointments');

var Schemas = {};

Schemas.Appointment = new SimpleSchema({
  date: {
    type: Date,
    label: "Date",
    autoform: {
      value: new Date()
    }
  },
  patientId: {
    type: String,
    autoform: {
      type: "hidden",
      options: [
        {label: "", value: "Hello"}
      ]
    }
  },
  doctorId: {
    type: String,
    autoform: {
      type: "hidden"
    }
  },
  reason: {
    type: String,
    label: "Reason for Visit"
  },
  treatment: {
    type: String,
    label: "Treatment",
    optional: true,
    autoform: {
      rows: 10
    }
  },
  notes: {
    type: String,
    label: "Additional Notes",
    optional: true,
    autoform: {
      rows: 10
    }
  },
  price: {
    type: Number,
    label: "Price",
    optional: true
  },
  transactionId: {
    type: String,
    label: "Transaction ID",
    optional: true
  }
});

Appointments.attachSchema(Schemas.Appointment);