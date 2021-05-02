exports.handler = function(context, event, callback) {
   const twiml = new Twilio.twiml.VoiceResponse();

  twiml.gather({
    input: 'speech',
    timeout:3,
    hints: 'Air freshners',
    action: '/orderFreshner'
  }).say('1.Febreze Odor-Eliminating Air Freshener with Downy Scent, April Fresh, 8.8 fl oz, 2 Pack cost:$4.94     2 Air Wick Pure Automatic Air Freshener Spray Refill, Lavender and Chamomile, 11.78 oz, 2 Count cost:$7.98      3 Air Wick Essential Mist Starter Kit (Diffuser + Refill), Lavender and Almond Blossom, Essential Oils Diffuser, Air Freshener cost:$9.97.please say 1 for febreze odor eliminating air freshner, 2 for air wick pure automatic air freshner and 3 for air wick essential mist .');

  callback(null, twiml);
};
