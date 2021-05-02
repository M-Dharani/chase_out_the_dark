exports.handler = function(context, event, callback) {
   const twiml = new Twilio.twiml.VoiceResponse();

  twiml.gather({
    input: 'speech',
    timeout:3,
    hints: 'chocolates and candy',
    action: '/orderChocolate'
  }).say('1 HERSHEYS, Milk Chocolate Eggs Candy, Easter, 10 oz, Bag ,cost:$2.98.   2 OREO Easter Chocolate Candy Eggs 5, 1.09 Oz Eggs cost:$3.48    3 DOVE Assorted Easter Candy Chocolate Spring Mix 22.6 oz cost:$9.98.please say 1 for hersheys chocolate,2 for oreo chocolate and 3 for DOVE chocolate.');

  callback(null, twiml);
};
