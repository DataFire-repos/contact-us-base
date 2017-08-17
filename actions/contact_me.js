"use strict";
let datafire = require('datafire');

var google_gmail = require('@datafire/google_gmail').actions;
module.exports = new datafire.Action({
  inputs: [{
    title: "message",
    type: "string"
  }, {
    title: "emailAddress",
    type: "string"
  }],
  handler: (input, context) => {
    return datafire.flow(context)
      .then(_ => google_gmail.users.messages.send({}, context))
  },
});
