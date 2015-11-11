var MongoClient = require('mongodb').MongoClient;
var fs = require('fs');
var jsonData;
fs.readFile('input.json', 'utf8', function (err, data) {
  if (err) throw err;
  jsonData= JSON.parse(data);
});
var myCollection;
MongoClient.connect('mongodb://heroku_v4m7hpj0@ds053184.mongolab.com:53184/heroku_v4m7hpj0', function(err, db) {
    if(err)
        throw err;
    else
        console.log("connected to the mongoDB !");

myCollection= db.collection('test');   
});
myCollection.insert({name: "doduck", description: "learn more than everyone"}, function(err, result) {
    if(err)
        console.log( err);
 
    console.log("entry saved");
});



    
    
    





