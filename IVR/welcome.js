exports.handler = function(context, event, callback){
   const twiml = new Twilio.twiml.VoiceResponse();

  twiml.gather({
    input: 'speech',
    timeout:3,
    hints: 'clothes, groceries, household essentials',
    action: '/available'
  }).say('Welcome. Please say clothes  for shopping clothes,groceries for shopping groceries and household essentials for shopping household essentials');

  callback(null, twiml);
}
	