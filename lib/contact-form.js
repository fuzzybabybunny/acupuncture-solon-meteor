Schema = {};
Schema.contact = new SimpleSchema({
    name: {
        type: String,
        label: "Your Name",
        max: 50
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "E-mail Address"
    },
    subject: {
        type: String,
        label: "Subject",
        max: 1000
    },
    message: {
        type: String,
        label: "Message",
        max: 1000
    },
    referral: {
        type: String,
        allowedValues: ['Google', 'Yelp', 'Healthgrades', 'Referring Doctor', 'Other (Please Specify)']
    }
});