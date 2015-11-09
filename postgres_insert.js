var pg = require('pg');
var parse = require('csv-parse');
var fs = require("fs");
var csv = require("fast-csv");
var stream = fs.createReadStream("input1.csv");
var connectionString =  'postgres://dodipbdfggqyte:XlvKUrEFuyTCT2Oagc4vU7jKXo@ec2-54-225-194-162.compute-1.amazonaws.com:5432/d8t7da2vk0jima';

var client = new pg.Client(connectionString);
client.connect();
console.log ("Client connected to database");


csv
 .fromStream(stream, {headers : true})
 .on("data", function(data){
    var d1=data;
    var id=d1.UNITID;
    var instn=JSON.stringify(d1.INSTNM);
    var add=JSON.stringify(d1.ADDR);
    var city=JSON.stringify(d1.CITY);
    var st=JSON.stringify(d1.STABBR);
    var zip=JSON.stringify(d1.ZIP);
    console.log(data.INSTNM);
    var query = client.query('Insert into ITEMS (unitid,instnm,addr,city,stabbr,zip) values(%s,%s,%s,%s,%s,%s)',[data.UNITID,data.INSTNM,data.ADDR,data.CITY,data.STABBR,data.ZIP],function(error, result) {
      //err is the error returned from the PostgreSQL server
      //handle the error here
        if(error)
            console.log(err);
         
        else
         console.log(result);
     
        });
        query.on("end",function(){
            console.log("finally");
        })

    
})
.on("end", function(){
    client.end();
     console.log("done");
 });

 
 


