var pg = require('pg');
var fs = require("fs");


var connectionString =  'postgres://dodipbdfggqyte:XlvKUrEFuyTCT2Oagc4vU7jKXo@ec2-54-225-194-162.compute-1.amazonaws.com:5432/d8t7da2vk0jima';

var client = new pg.Client(connectionString);
client.connect();
console.log ("Client connected to database");
var query;

var rl = require('readline').createInterface({
  input: require('fs').createReadStream('input1.csv')
});
rl.on('line', function (line) {
  console.log('Line from file:', line);
    var arr =line.split(/[ ,]+/);
    query = client.query("Insert into ITEMS (unitid,instnm,addr,city,stabbr,zip) values($1, $2, $3, $4, $5, $6)",[parseInt(arr[0]), arr[1],arr[2],arr[3],arr[4],arr[5]] ,function(err, result) {
      //err is the error returned from the PostgreSQL server
      //handle the error here
     if(!err)
         console.log(result);
     else
         console.log(err);
     
    });
    
    
});





 
 


