var mongoose = require ("mongoose"); // The reason for this demo.

// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.  
var uristring ='mongodb://testdb:MONGOdb123@ds053184.mongolab.com:53184/heroku_v4m7hpj0';

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function (err, res) {
  if (err) { 
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});

