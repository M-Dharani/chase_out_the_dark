exports.handler = function(context, event, callback)  {
  const twiml = new Twilio.twiml.VoiceResponse();

  const command = event.SpeechResult;

  switch(command) {
    case 'one':
      twiml.say('your order for woolite dark care  has been placed..');
      break;
    case 'two':
      twiml.say('your order for whitmor laundry hamper  has been placed.');
     
      break;
    case 'three':
      twiml.say('your order for seventh generation detergent packs has been placed.');
     
      break;
    default:
      twiml.say(`Sorry but I do not recognize ${command} as a valid command. Try again.`);
      twiml.redirect('/laundry');
      break;
  }

  callback(null, twiml);
}