exports.handler = function(context, event, callback)  {
  const twiml = new Twilio.twiml.VoiceResponse();

  const command = event.SpeechResult;

  switch(command) {
    case 'one':
      twiml.say('your order for hersheys chocolate has been placed..');
      break;
    case 'two':
      twiml.say('your order for oreo chocolate has been placed.');
     
      break;
    case 'three':
      twiml.say('your order for DOVE chocolate has been placed.');
     
      break;
    default:
      twiml.say(`Sorry but I do not recognize ${command} as a valid command. Try again.`);
      twiml.redirect('/chocolateRes');
      break;
  }

  callback(null, twiml);
}