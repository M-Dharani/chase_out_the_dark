exports.handler = function(context, event, callback)  {
  const twiml = new Twilio.twiml.VoiceResponse();

  const command = event.SpeechResult;

  switch(command) {
    case 'breakfast':
      twiml.say('Fetching your products.');
      twiml.redirect('/breakfastRes');
      break;
    case 'beverages':
      twiml.say('Fetching your beverages list.');
      twiml.redirect('/beveragesRes');
      break;
    case 'chocolate':
      twiml.say('Fetching your products.');
      twiml.redirect('/chocolateRes');
      break;
    default:
      twiml.say(`Sorry but I do not recognize ${command} as a valid command. Try again.`);
      twiml.redirect('/GroceryRES');
      break;
  }

  callback(null, twiml);
}