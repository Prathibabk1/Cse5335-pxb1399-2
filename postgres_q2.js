var pg = require('pg');
var connectionString =  'postgres://dodipbdfggqyte:XlvKUrEFuyTCT2Oagc4vU7jKXo@ec2-54-225-194-162.compute-1.amazonaws.com:5432/d8t7da2vk0jima';
var prompt = require('prompt');
prompt.start();

  prompt.get(['city'], function (err, input) {
    if (err) { console.log(err); }
var str=input.city;
      console.log(str);
var client = new pg.Client(connectionString);
client.connect();
console.log("Client connected to database");
      
 var query = client.query("SELECT * FROM items WHERE items.city = $1",[str],function(err) {
      //err is the error returned from the PostgreSQL server
      //handle the error here
     if(err)
         console.log(err);
     
     
    })

var rows = [];
   
 query.on('row', function(row) {
      //fired once for each row returned
      rows.push(row);
        console.log(JSON.stringify(row));
       
    })
    query.on('end', function(result) {
      //fired once and only once, after the last row has been returned and after all 'row' events are emitted
      //in this example, the 'rows' array now contains an ordered set of all the rows which we received from postgres
      console.log(result.rowCount + ' rows were received');
         client.end();
    });
      
});