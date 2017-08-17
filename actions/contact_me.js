"use strict";
let datafire = require('datafire');

var google_gmail = require('@datafire/google_gmail').actions;
module.exports = new datafire.Action({
  inputs: [{
    title: "message",
    type: "string"
  }, {
    title: "emailAddress",
    type: "string",
    pattern: ".*@.*\\..*",
    maxLength: 254
  }],
  handler: (input, context) => {
    return datafire.flow(context)
      .then(_ => google_gmail.buildMessage({
        to: "me@company.com",
        from: "no-reply@company.com",
        subject: "A new message from " + input.emailAddress,
        body: input.message,
      }, context))
      .then(encodedMessage => google_gmail.users.messages.send({
        userId: me,
        body: {},
      }, context))
  },
});
