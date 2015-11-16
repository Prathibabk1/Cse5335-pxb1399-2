var prompt = require('prompt');
var MongoClient = require('mongodb').MongoClient;
var myCollection;


  prompt.start();

  prompt.get(['id'], function (err, input) {
    if (err) { console.log(err); }
      
      MongoClient.connect('mongodb://heroku_v4m7hpj0:4nv6cclfu1l950i645sqtvnmkb@ds053184.mongolab.com:53184/heroku_v4m7hpj0', function(err, database) {
    if(err)
        console.log( err);
    else
        console.log("connected to the mongoDB !");

myCollection= database.collection('test'); 

var str=input.id;
var k=parseInt(str);


myCollection.findOne({UNITID:k},function(err, result){
console.log("mongod::   "+ result.UNITID +","+ result.INSTNM +","+ result.ADDR+","+result.CITY+","+result.STABBR+","+result.ZIP);

}); 

});
            
      
    });