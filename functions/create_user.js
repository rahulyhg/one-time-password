const admin = require('firebase-admin');

module.exports = function(req, res) {
  // Verify the user provided a phone
  if (!req.body.phone){
    return res.status(422).sent({ error: 'Bad Input'});
  }

  // Format the phone number to remove dashes and parens
  const phone = String(req.body.phone).replace(/[^\d]/g, ""); // ensure number is a String and strip out non-digits

  // Create a new user account using the phone number
  // Then: respond to the user request saying the account was made
  admin.auth().createUser({ uid: phone })
    .then(user => res.send(user))
    .catch(err => res.status(422).send({ error: err}));
}
