var reply = require('./../');

reply.confirm('Do you want to continue', function(err, yes){

  if (!err && yes)
    console.log("Awesome!");
  else
    console.log("Goodbye");

});
