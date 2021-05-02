exports.handler = function(context, event, callback) {
   const twiml = new Twilio.twiml.VoiceResponse();

  twiml.gather({
    input: 'speech',
    timeout:3,
    hints: 'mens clothes',
    action: '/order'
  }).say('1,Active wear:Russell,Cost:$9.94,color:black,blue,white   2,Jeans:George mens carpenter jean,cost:$14.96,color:dark,medium,trailblazer    3,Coates and Jackets:Wrangler,cost:$23.00-$29.94,color:brown duck,black,smokie olive. please say 1 for active wear, 2 for jeans,3 for coats and jackets ');

  callback(null, twiml);
};
	
