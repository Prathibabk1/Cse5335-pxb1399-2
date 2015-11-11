var MongoClient = require('mongodb').MongoClient;
var fs = require('fs');
var jsonData;
var myCollection;
fs.readFile('input.json', 'utf8', function (err, data) {
  if (err) throw err;
  jsonData= JSON.parse(data);
});

MongoClient.connect('mongodb://admin@ds053184.mongolab.com:53184/heroku_v4m7hpj0', function(err, db) {
    if(err)
        console.log( err);
    else
        console.log("connected to the mongoDB !");

myCollection= db.collection('test');  
console.log(myCollection);
    
for(var i=0; i<99; i++){
var v1= {UNITID:jsonData[i].UNITID, INSTNM:jsonData[i].INSTNM, ADDR:jsonData[i].ADDR,STABBR:jsonData[i].STABBR,CITY:jsonData[i].CITY, ZIP:jsonData[i].ZIP };
myCollection.insert(v1,{w:1} ,function(err, result){
if(err)
console.log(err);
else{
console.log('inserted');
console.log(result);
}
});
}
    
    
    
});

/*
myCollection.insert({"name": "doduck", "description": "learn more than everyone"}, function(err, result) {
    if(err)
        console.log( err);
 
    console.log("entry saved");
});*/



    
    
    





