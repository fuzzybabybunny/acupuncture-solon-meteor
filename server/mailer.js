var mandrill = Npm.require('mandrill-api/mandrill');

// Create a function to log the response from the Mandrill API
// function log(obj) {
//     $('#response').text(JSON.stringify(obj));
// }

// create a new instance of the Mandrill class with your API key
var m = new mandrill.Mandrill('uwCFgPa5BHWpmkqfN9HF3Q');

// create a variable for the API call parameters
var params = {
    "message": {
        "from_email":"none@none.com",
        "to":[{"email":"victor@victorlinphoto.com"}],
        "subject": "Sending a text email from the Mandrill API",
        "text": "I'm learning the Mandrill API at Codecademy."
    }
};

sendTheMail = function() {
// Send the email!

  m.messages.send(params, function(res) {
    console.log(res);
  }, function(err) {
    console.log(err);
  });
};

// var mandrill_client = new mandrill.Mandrill('uwCFgPa5BHWpmkqfN9HF3Q');

// var message = {
//     "html": "<p>Example HTML content</p>",
//     "text": "Example text content",
//     "subject": "example subject",
//     "from_email": "message.from_email@example.com",
//     "from_name": "Example Name",
//     "to": [{
//             "email": "victor@victorlinphoto.com",
//             "name": "Recipient Name",
//             "type": "to"
//         }],
//     "headers": {
//         "Reply-To": "message.reply@example.com"
//     },
//     "important": false,
//     "track_opens": null,
//     "track_clicks": null,
//     "auto_text": null,
//     "auto_html": null,
//     "inline_css": null,
//     "url_strip_qs": null,
//     "preserve_recipients": null,
//     "view_content_link": null,
//     "bcc_address": "message.bcc_address@example.com",
//     "tracking_domain": null,
//     "signing_domain": null,
//     "return_path_domain": null,
//     "merge": true,
//     "merge_language": "mailchimp",
//     "global_merge_vars": [{
//             "name": "merge1",
//             "content": "merge1 content"
//         }],
//     "merge_vars": [{
//             "rcpt": "recipient.email@example.com",
//             "vars": [{
//                     "name": "merge2",
//                     "content": "merge2 content"
//                 }]
//         }],
//     "tags": [
//         "password-resets"
//     ],
//     "subaccount": "customer-123",
//     "google_analytics_domains": [
//         "example.com"
//     ],
//     "google_analytics_campaign": "message.from_email@example.com",
//     "metadata": {
//         "website": "www.example.com"
//     },
//     "recipient_metadata": [{
//             "rcpt": "recipient.email@example.com",
//             "values": {
//                 "user_id": 123456
//             }
//         }],
//     "attachments": [{
//             "type": "text/plain",
//             "name": "myfile.txt",
//             "content": "ZXhhbXBsZSBmaWxl"
//         }],
//     "images": [{
//             "type": "image/png",
//             "name": "IMAGECID",
//             "content": "ZXhhbXBsZSBmaWxl"
//         }]
// };
// var async = false;
// var ip_pool = "Main Pool";
// mandrill_client.messages.send({"message": message, "async": async, "ip_pool": ip_pool}, function(result) {
//     console.log(result);
//     /*
//     [{
//             "email": "recipient.email@example.com",
//             "status": "sent",
//             "reject_reason": "hard-bounce",
//             "_id": "abc123abc123abc123abc123abc123"
//         }]
//     */
// }, function(e) {
//     // Mandrill returns the error as an object with name and message keys
//     console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
//     // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
// });