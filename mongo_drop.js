var MongoClient = require('mongodb').MongoClient;
var myCollection;
MongoClient.connect('mongodb://heroku_v4m7hpj0:4nv6cclfu1l950i645sqtvnmkb@ds053184.mongolab.com:53184/heroku_v4m7hpj0', function(err, database) {
    if(err)
        console.log( err);
    else
        console.log("connected to the mongoDB !");

myCollection= database.collection('test'); 
myCollection.drop();
});