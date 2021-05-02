exports.handler = function(context, event, callback)  {
  const twiml = new Twilio.twiml.VoiceResponse();

  const command = event.SpeechResult;

  switch(command) {
    case 'clothes':
      twiml.say('Fetching your clothes.');
      twiml.redirect('/clothesRES');
      break;
    case 'groceries':
      twiml.say('Fetching your groceries result.');
      twiml.redirect('/GroceryRES');
      break;
    case 'household essentials':
      twiml.say('Fetching your household essentials result.');
      twiml.redirect('/householdRes');
      break;
    default:
      twiml.say(`Sorry but I do not recognize ${command} as a valid command. Try again.`);
      twiml.redirect('/welcome');
      break;
  }

  callback(null, twiml);
}
