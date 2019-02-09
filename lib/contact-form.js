Schema = {};
Schema.contact = new SimpleSchema({
    name: {
        type: String,
        label: "Your Name",
        max: 50
    },
    retired: {
        type: Boolean,
        label: "I understand that the acupuncturist is RETIRED but I would still like to contact her."
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
        allowedValues: ['Google', 'Yelp', 'Healthgrades', 'Referring Doctor (Please Specify)', "Friend's Recommendation (Please Specify)", 'Other (Please Specify)']
    },
    doctorName: {
        type: String,
        label: "Doctor's Name",
        max: 1000,
        optional: true,
        custom: function(){
          // console.log(this.field('referral').value);
          var customCondition = this.field('referral').value === 'Referring Doctor (Please Specify)';
          // console.log("this field value: ", this.field('referral').value);
          // console.log("custom condition: ", customCondition);
          if (customCondition && !this.isSet && (!this.operator || (this.value === null || this.value === ""))) {
            return "required";
          }
        }
    },
    friendName: {
        type: String,
        label: "Friend's Name",
        max: 1000,
        optional: true,
        custom: function(){
          // console.log(this.field('referral').value);
          var customCondition = this.field('referral').value === "Friend's Recommendation (Please Specify)";
          // console.log("this field value: ", this.field('referral').value);
          // console.log("custom condition: ", customCondition);
          if (customCondition && !this.isSet && (!this.operator || (this.value === null || this.value === ""))) {
            return "required";
          }
        }
    },
    specificReferral: {
        type: String,
        label: 'Other',
        max: 1000,
        optional: true,
        custom: function(){
          // console.log(this.field('referral').value);
          var customCondition = this.field('referral').value === 'Other (Please Specify)';
          // console.log("this field value: ", this.field('referral').value);
          // console.log("custom condition: ", customCondition);
          if (customCondition && !this.isSet && (!this.operator || (this.value === null || this.value === ""))) {
            return "required";
          }
        }
    }
});