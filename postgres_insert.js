var pg = require('pg');
var parse = require('csv-parse');
var fs = require("fs");
var csv = require("fast-csv");
var stream = fs.createReadStream("input1.csv");
var connectionString =  'postgres://dodipbdfggqyte:XlvKUrEFuyTCT2Oagc4vU7jKXo@ec2-54-225-194-162.compute-1.amazonaws.com:5432/d8t7da2vk0jima';

var client = new pg.Client(connectionString);
client.connect(function (err) {
if (!err)
console.log ("Client connected to database");
else
console.log(err);
});
var query;

csv
 .fromStream(stream, {headers : true})
 .on("data", function(data){
    var d1=data;
    var line='Insert into items (UNITID,INSTNM, ADDR,CITY,STABBR,ZIP) values ( '+d1.UNITID+','+d1.INSTNM+','+d1.ADDR+','+d1.CITY+','+d1.STABBR+','+d1.ZIP+')';
    console.log(line);
 query = client.query(line,function(err,result){
if (!err)
console.log(result);
else
console.log('failed to get data');
client.end(); 
});
    
    
 })
 .on("end", function(){
     console.log("done");
 });


