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
for(var i=0; i<2; i++){
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




