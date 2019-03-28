"use strict";
let datafire = require('datafire');

var google_gmail = require('@datafire/google_gmail').actions;
module.exports = new datafire.Action({
  inputs: [{
    title: "message",
    type: "string",
    maxLength: 5000
  }, {
    title: "emailAddress",
    type: "string",
    pattern: ".*@.*\\..*",
    maxLength: 254
  }],
  handler: async (input, context) => {
    let message = await google_gmail.buildMessage({
        to: "YOUR_EMAIL@gmail.com",
        from: "YOUR_EMAIL@gmail.com",
        subject: "A new message from " + input.emailAddress,
        body: input.message,
    }, context);
    let sent = await google_gmail.users.messages.send({userId: "me", body: {raw: message}}, context);
    return "Success";
  },
});
