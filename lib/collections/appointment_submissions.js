AppointmentSubmissions = new Mongo.Collection('appointmentSubmissions');

AddressSchema = new SimpleSchema({
  address1: {
    type: String,
    max: 100,
    label: "Home Address"
  },
  address2: {
    type: String,
    max: 100,
    optional: true,
    label: "Apt / Suite"
  },
  city: {
    type: String,
    max: 50,
    label: "City"
  },
  state: {
    type: String,
    regEx: /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/,
    label: "State"
  },
  zip: {
    type: String,
    regEx: /^[0-9]{5}$/,
    label: "Zip Code"
  }
});

AppointmentSubmissions.attachSchema(new SimpleSchema({
  patient: {
    type: Object
  },
  "patient.firstName": {
    type: String,
    label: "First Name"
  },
  "patient.middleName": {
    type: String,
    label: "Middle Name",
    optional: true 
  },
  "patient.lastName": {
    type: String,
    label: "Last Name"
  },
  "patient.birthday": {
    type: Date,
    label: "Date of Birth"
  },
  "patient.birthplace": {
    type: String,
    label: "Place of Birth",
    optional: true
  },
  "patient.address": {
    type: AddressSchema
  },
  "patient.homePhone": {
    type: String,
    label: "Home Phone",
    optional: true
  },
  "patient.workPhone": {
    type: String,
    label: "Work Phone",
    optional: true
  },
  "patient.cellPhone": {
    type: String,
    label: "Cell Phone",
    optional: true
  },
  "patient.email": {
    type: String,
    label: "Email Address"
  },
  "patient.occupation": {
    type: String,
    label: "Occupation",
    optional: true
  },
  "patient.employer": {
    type: String,
    label: "Employer",
    optional: true
  },
  "patient.referralName": {
    type: String,
    label: "Name of Referral",
    optional: true
  },
  "patient.referralNumber": {
    type: String,
    label: "Phone Number of Referral",
    optional: true
  },
  "patient.relationships": {
    type: Boolean,
    autoform: {
      type: "select-radio",
      options: function () {
        return [
          {label: "Single", value: "single"},
          {label: "Married", value: "married"},
          {label: "Divorced", value: "divorced"},
          {label: "Widowed", value: "widowed"}
        ];
      },
      optional: true
    }
  },
  "patient.emergencyName": {
    type: String,
    label: "Name of Emergency Contact"
  },
  "patient.emergencyPhone": {
    type: String,
    label: "Phone Number of Emergency Contact"
  },
  "patient.familyDoctorName": {
    type: String,
    label: "Family Doctor",
    optional: true
  },
  "patient.familyDoctorPhone": {
    type: String,
    label: "Phone Number",
    optional: true
  },
  familyDoctorDateLastVisited: {
    type: String,
    label: "Date of Last Visit",
    optional: true
  },
  familyDoctorReasonLastVisited: {
    type: String,
    label: "Reason for Last Visit",
    optional: true
  },
  specialistDoctorName: {
    type: String,
    label: "Specialist for Current Problem",
    optional: true
  },
  specialistDoctorPhone: {
    type: String,
    label: "Phone Number",
    optional: true
  },
  specialistDoctorDateLastVisited: {
    type: String,
    label: "Date of Last Visit",
    optional: true
  },
  specialistDoctorReasonLastVisited: {
    type: String,
    label: "Reason for Last Visit",
    optional: true
  },
  reason: {
    type: String,
    label: "Reason for Today's Visit",
    autoform: {
      rows: 10
    }
  },
  medications: {
    type: String,
    label: "Medications and Supplements You are Currently Taking",
    autoform: {
      rows: 6
    },
    optional: true
  },
  otherTreatments: {
    type: String,
    label: "Other Treatment Therapies You are Currently Taking",
    autoform: {
      rows: 6
    },
    optional: true
  },
  otherAcupuncture: {
    type: Boolean,
    autoform: {
      type: "boolean-checkbox"
    },
    label: "Have you had an acupuncture treatment before?"
  },
  nervousNeedles: {
    type: Boolean,
    autoform: {
      type: "boolean-checkbox"
    },
    label: "Are you nervous about needles?"
  },
  bleedOrBruise: {
    type: Boolean,
    autoform: {
      type: "boolean-checkbox"
    },
    label: "Do you bleed for a long time or bruise easily?"
  },
  heartProblems: {
    type: Boolean,
    autoform: {
      type: "boolean-checkbox"
    },
    label: "Do you have high blood pressure or heart problems?"
  },
  fainting: {
    type: Boolean,
    autoform: {
      type: "boolean-checkbox"
    },
    label: "Do you have a tendency to faint?"
  },
  hepatitis: {
    type: Boolean,
    autoform: {
      type: "boolean-checkbox"
    },
    label: "Have you ever had hepatitis?"
  },
  diabetes: {
    type: Boolean,
    autoform: {
      type: "boolean-checkbox"
    },
    label: "Are you diabetic?"
  },
  pregnant: {
    type: Boolean,
    autoform: {
      type: "boolean-checkbox"
    },
    label: "Are you pregnant?"
  },
  signature: {
    type: Boolean,
    autoform: {
      type: "boolean-checkbox"
    },
    label: "I understand that the Food and Drug Administration may classify acupuncture as an experimental or investigational procedure at this time. I hereby agree to accept the acupuncture treatment, and I have been made aware of the possibility of complications that may result from this procedure. I also understand that there is no implied or stated guarantee of success or effectiveness of a specific treatment or series of treatments.",
  },
  date: {
    type: Date,
    label: "Date",
    autoform: {
      value: new Date()
    }
  }
}));