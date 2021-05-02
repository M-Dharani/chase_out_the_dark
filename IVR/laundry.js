exports.handler = function(context, event, callback) {
   const twiml = new Twilio.twiml.VoiceResponse();

  twiml.gather({
    input: 'speech',
    timeout:3,
    hints: 'laundry care',
    action: '/orderLaundry'
  }).say('1.Woolite Dark Care Laundry Detergent, Midnight Breeze Scent, 50 oz/ 33 Loads cost:$11.67    2 Whitmor Square Easy Care Square Laundry Hamper - Java cost:$16.39    3 Seventh Generation Free & Clear Laundry Detergent Packs Fragrance Free 45 count cost:$11.99. please say 1 for woolite dark care ,2 for whitmor laundry hamper and 3 for seventh generation detergent packs');

  callback(null, twiml);
};
	

