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
    let user = await google_gmail.users.getProfile(null, context);
    let message = await google_gmail.buildMessage({
        to: user.userId,
        from: user.userId,
        subject: "A new message from " + input.emailAddress,
        body: input.message,
    }, context);
    let sent = google_gmail.users.messages.send({userId: "me", body: {raw: message}}, context);
    return "Success";
  },
});
