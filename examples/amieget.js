var reply = require('./..');

reply.get(options, function(err, answers){
  console.log('');
  if (err) console.log(err);
  console.log(answers);
