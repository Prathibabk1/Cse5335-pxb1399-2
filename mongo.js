//Lets load the mongoose module in our program
var mongoose = require('mongoose');

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://heroku_v4m7hpj0:MONGOdb123@ds053184.mongolab.com:53184/heroku_v4m7hpj0';

//Lets connect to our database using the DB server URL.
mongoose.connect(url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    
    console.log("connected");
  // yay!
});
db.close();

