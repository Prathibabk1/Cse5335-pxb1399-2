var MongoClient = require('mongodb').MongoClient;
var db=MongoClient.connect('mongodb://heroku_v4m7hpj0@ds053184.mongolab.com:53184/heroku_v4m7hpj0', function(err, db) {
        if(err)
            throw err;
        else
            console.log("connected to the mongoDB !");
    
});
var fs = require('fs');
var jsonData;
fs.readFile('input.json', 'utf8', function (err, data) {
  if (err) throw err;
  jsonData= JSON.parse(data);
   for (var i = 0; i < jsonData.length; ++i) {
    console.log(" Id"+jsonData[i].UNITID);
    console.log("Institution"+jsonData[i].INSTNM);
    console.log("addr"+jsonData[i].ADDR);
       console.log("addr"+jsonData[i].STABBR);
       console.log("addr"+jsonData[i].CITY);
       console.log("addr"+jsonData[i].ZIP);
    
  }
});



