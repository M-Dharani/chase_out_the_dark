exports.handler = function(context, event, callback) {
   const twiml = new Twilio.twiml.VoiceResponse();

  twiml.gather({
    input: 'speech',
    timeout:3,
    hints: 'Laundry care,cleaning tools,air freshners',
    action: '/choiceforHousehold'
  }).say('. Please say laundry care for shopping laundry care products, cleaning tools for shopping  cleaning tools products and air freshners for shopping air freshners products');

  callback(null, twiml);
};