var MongoClient = require('mongodb').MongoClient;
var fs = require('fs');
var jsonData;
var myCollection;
fs.readFile('input.json', 'utf8', function (err, data) {
  if (err) throw err;
  jsonData= JSON.parse(data);
});

MongoClient.connect('mongodb://heroku_v4m7hpj0@ds053184.mongolab.com:53184/heroku_v4m7hpj0', function(err, db) {
    if(err)
        throw err;
    else
        console.log("connected to the mongoDB !");

myCollection= db.collection('test');  
console.log(myCollection);
});




    
    
    





