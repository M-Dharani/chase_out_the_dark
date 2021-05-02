exports.handler = function(context, event, callback)  {
  const twiml = new Twilio.twiml.VoiceResponse();

  const command = event.SpeechResult;

  switch(command) {
    case 'one':
      twiml.say('your order for febreze odor eliminating air freshner has been placed..');
      break;
    case 'two':
      twiml.say('your order for air wick pure automatic air freshner  has been placed.');
     
      break;
    case 'three':
      twiml.say('your order for  air wick essential mist has been placed.');
     
      break;
    default:
      twiml.say(`Sorry but I do not recognize ${command} as a valid command. Try again.`);
      twiml.redirect('/airFreshner');
      break;
  }

  callback(null, twiml);
}

