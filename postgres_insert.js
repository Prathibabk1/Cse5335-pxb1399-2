var pg = require('pg');
var parse = require('csv-parse');
var fs = require("fs");
var csv = require("fast-csv");
var stream = fs.createReadStream("input1.csv");
var connectionString =  'postgres://dodipbdfggqyte:XlvKUrEFuyTCT2Oagc4vU7jKXo@ec2-54-225-194-162.compute-1.amazonaws.com:5432/d8t7da2vk0jima';

var client = new pg.Client(connectionString);
client.connect();
console.log ("Client connected to database");
var query;

csv
 .fromStream(stream, {headers : true})
 .on("data", function(data){
    var d1=data;
    var line='Insert into items (UNITID,INSTNM, ADDR,CITY,STABBR,ZIP) values ('+d1.UNITID+','+JSON.stringify(d1.INSTNM)+','+JSON.stringify(d1.ADDR)+','+JSON.stringify(d1.CITY)+','+JSON.stringify(d1.STABBR)+','+JSON.stringify(d1.ZIP)+');';
    
 query = client.query(line,function(error, result) {
      //err is the error returned from the PostgreSQL server
      //handle the error here
     
      //handle the error
    if (!error)
    console.log(result);
     
    else{
    console.log(error);
    console.log('failed to insert data');}
    });
      
    });

 client.end(); 
 


