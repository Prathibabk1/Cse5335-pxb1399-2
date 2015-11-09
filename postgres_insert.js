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
    var d1 =data;
    var id=d1.UNITID;
    var instn=JSON.stringify(d1.INSTNM);
    var add=JSON.stringify(d1.ADDR);
    var city=JSON.stringify(d1.CITY);
    var st=JSON.stringify(d1.STABBR);
    var zip=JSON.stringify(d1.ZIP);
    console.log(data);
     query = client.query("Insert into ITEMS (unitid,instnm,addr,city,stabbr,zip) values($1, $2, $3, $4, $5, $6)",[parseInt(data.UNITID), data.INSTNM, data.ADDR, data.CITY, data.STABBR, data.ZIP]);
    query.on('error', function(error) {
      //handle the error
        if(error)
            console.log(error);
                        
    });

    
})
.on("end", function(){
    client.end();
     console.log("done");
 });

 
 


