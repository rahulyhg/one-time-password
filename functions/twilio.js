const twilio = require('twilio');
const twilio_creds = require('./twilio_creds.json');

const accountSid = twilio_creds.sid;
const authToken = twilio_creds.token;

module.exports = new twilio.Twilio(accountSid, authToken);
