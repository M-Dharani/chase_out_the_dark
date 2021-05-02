exports.handler = function(context, event, callback) {
   const twiml = new Twilio.twiml.VoiceResponse();

  twiml.gather({
    input: 'speech',
    timeout:3,
    hints: 'Breakfast ,beverages,chocolate,candy and gum',
    action: '/choiceforGrocery'
  }).say('Please say breakfast for shopping breakfast , beverages for shopping beverages and chocolate for shopping chocolate,candy and gum');

  callback(null, twiml);
};
