exports.handler = function(context, event, callback) {
   const twiml = new Twilio.twiml.VoiceResponse();

  twiml.gather({
    input: 'speech',
    timeout:3,
    hints: 'beverages',
    action: '/orderBeverages'
  }).say('1 Pepsi:(2 pack) Pepsi Soda, 16.9 oz Bottles, 6 Count cost:$8.62    2 Gevalia Café at Home Caramel Latte Instant Coffee Specialty Beverage Blend Kit, 5 ct Box cost:$6.28  3  Minute Maid 100% Juice, Orange, 10 Fl Oz, 6 Count cost:$15.20.please say 1 for pepsi, 2 for instant coffee and 3 for minute maid');

  callback(null, twiml);
};
	

