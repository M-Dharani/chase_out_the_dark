exports.handler = function(context, event, callback) {
   const twiml = new Twilio.twiml.VoiceResponse();

  twiml.gather({
    input: 'speech',
    timeout:3,
    hints: 'womens clothes',
    action: '/womenOrder'
  }).say('1 Active wear:premiere brand cost:$11.97 color:black,white   2 Skirts:Time and Trucost:$12.24 color:gold  3 Dresses and Jumpsuits:vista cost:$13.44 - $14.79 color:blue. please say 1 for active wear ,2 for skirts and 3 for dresses and jumpsuits ');

  callback(null, twiml);
};