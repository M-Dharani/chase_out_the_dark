exports.handler = function(context, event, callback) {
   const twiml = new Twilio.twiml.VoiceResponse();

  twiml.gather({
    input: 'speech',
    timeout:3,
    hints: 'kids clothes',
    action: '/choiceforClothing'
  }).say('1.Dresses:Wonder Nation.cost:$9.98 - $10.39.color:pink.    2.Jumpsuits:Emmababy.cost:$11.79- $13.97.color:purple,green.    3.Tops and T-shirts:T-stars.cost:$7.97 - $12.87.color:green,pink .please say 1 for dresses, 2 for jumpsuits and 3 for tops and t shirts');

  callback(null, twiml);
};
	
