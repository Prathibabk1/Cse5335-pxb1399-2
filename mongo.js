//Lets load the mongoose module in our program
var mongoose = require('mongoose');

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://<dbuser>:<dbpassword>@ds053184.mongolab.com:53184/heroku_v4m7hpj0';

//Lets connect to our database using the DB server URL.
mongoose.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // do some work here with the database.

    //Close connection
    db.close();
  }
});