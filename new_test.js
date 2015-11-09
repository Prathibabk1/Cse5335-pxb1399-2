var pg = require('pg');
var fs = require("fs");
var csv = require("fast-csv");
var connectionString =  'postgres://dodipbdfggqyte:XlvKUrEFuyTCT2Oagc4vU7jKXo@ec2-54-225-194-162.compute-1.amazonaws.com:5432/d8t7da2vk0jima';

var client = new pg.Client(connectionString);
client.connect();
console.log ("Client connected to database");

var stream = fs.createReadStream("input1.csv");
 
csv
 .fromStream(stream, {ignoreEmpty: true})
 .on("data", function(data){
     console.log(data);
     var query = client.query("Insert into ITEMS (unitid,instnm,addr,city,stabbr,zip) values($1, $2, $3, $4, $5, $6)",[parseInt(data.UNITID),'uta','arlington','arling','tx','76010'],function(err, result) {
      //err is the error returned from the PostgreSQL server
      //handle the error here
     if(!err)
         console.log(result);
     else
         console.log(err);
     
    });
   query.on("end", function(){
    client.end();
     console.log("done");
 });

    
    
    
    
    
    
    
    
 })
 .on("end", function(){
     console.log("done");
 });
 

  
 
 


