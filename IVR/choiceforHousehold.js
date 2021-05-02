exports.handler = function(context, event, callback)  {
  const twiml = new Twilio.twiml.VoiceResponse();

  const command = event.SpeechResult;

  switch(command) {
    case 'laundry care':
      twiml.say('Fetching your products.');
      twiml.redirect('/laundry');
      break;
    case 'cleaning tools':
      twiml.say('Fetching your products.');
      twiml.redirect('/cleaningTools');
      break;
    case 'air freshners':
      twiml.say('Fetching your products.');
      twiml.redirect('/airFreshner');
      break;
    default:
      twiml.say(`Sorry but I do not recognize ${command} as a valid command. Try again.`);
      twiml.redirect('/householdRes');
      break;
  }

  callback(null, twiml);
}
