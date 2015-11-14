 var prompt = require('prompt');

  prompt.start();

  prompt.get(['username'], function (err, result) {
    if (err) { return onErr(err); }
    
   
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }