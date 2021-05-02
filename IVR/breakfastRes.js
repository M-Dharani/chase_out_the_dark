exports.handler = function(context, event, callback) {
   const twiml = new Twilio.twiml.VoiceResponse();

  twiml.gather({
    input: 'speech',
    timeout:3,
    hints: 'breakfast',
    action: '/orderBreakfast'
  }).say('1 Cheerios, Cereal with Whole Grain Oats, Gluten Free, 18 oz  cost:$3.64   2 Great Value Instant Oatmeal, Maple & Brown Sugar Value Pack, 20 Packets  cost:$3.24.  3 Krusteaz Pancake Mix, Light & Fluffy, Buttermilk, Pouch cost:$7.42. please say 1 for cereal,2 for oatmeal and 3 for pancake mix');

  callback(null, twiml);
};
	
