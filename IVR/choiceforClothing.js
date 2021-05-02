exports.handler = function(context, event, callback)  {
  const twiml = new Twilio.twiml.VoiceResponse();

  const command = event.SpeechResult;

  switch(command) {
    case 'mens clothing':
      twiml.say('Fetching your clothes.');
      twiml.redirect('/menClothing');
      break;
    case 'womens clothing':
      twiml.say('Fetching your clothes.');
      twiml.redirect('/womenClothing');
      break;
    case 'kids clothing':
      twiml.say('Fetching your clothes.');
      twiml.redirect('/kidsClothing');
      break;
    default:
      twiml.say(`Sorry but I do not recognize ${command} as a valid command. Try again.`);
      twiml.redirect('/clothesRES');
      break;
  }

  callback(null, twiml);
}

