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
      .then(_ => google_gmail.buildMessage({}, context))
  },
});
