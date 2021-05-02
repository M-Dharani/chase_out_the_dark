exports.handler = function(context, event, callback)  {
  const twiml = new Twilio.twiml.VoiceResponse();

  const command = event.SpeechResult;

  switch(command) {
    case 'one':
      twiml.say('your order for  microfiber twist  has been placed..');
      break;
    case 'two':
      twiml.say('your order for broom and dustpan has been placed.');
     
      break;
    case 'three':
      twiml.say('your order for spin mop  has been placed.');
     
      break;
    default:
      twiml.say(`Sorry but I do not recognize ${command} as a valid command. Try again.`);
      twiml.redirect('/cleaningTools');
      break;
  }

  callback(null, twiml);
}
