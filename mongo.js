//Lets load the mongoose module in our program
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://heroku_v4m7hpj0:MONGOdb123@ds053184.mongolab.com:53184/heroku_v4m7hpj0', function(err, db) {
        if(err)
            throw err;
        console.log("connected to the mongoDB !");
        

});
