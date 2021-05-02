exports.handler = function(context, event, callback) {
   const twiml = new Twilio.twiml.VoiceResponse();

  twiml.gather({
    input: 'speech',
    timeout:3,
    hints: 'cleaning tools',
    action: '/orderTools'
  }).say('1 O-Cedar MicroTwist Microfiber Twist Mop Refill cost:$7.98    2 Quickie Stand & Store Lobby Broom & Dustpan cost:$9.41     3 O-Cedar EasyWring Spin Mop & Bucket System cost:$29.98 .please say 1 for microfiber twist mob,2 for broom and dustpan , 3 for spin mop');

  callback(null, twiml);
};