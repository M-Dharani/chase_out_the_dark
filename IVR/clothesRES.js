exports.handler = function(context, event, callback) {
   const twiml = new Twilio.twiml.VoiceResponse();

  twiml.gather({
    input: 'speech',
    timeout:3,
    hints: 'men, women,kids,mens clothing ,womens clothing,kids clothing',
    action: '/choiceforClothing'
  }).say(' Please say mens clothing  for shopping clothes for men, womens clothing for shopping  for  women and kids clothing for shopping for kids');

  callback(null, twiml);
};