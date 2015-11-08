var pg = require('pg');
var connectionString =  'postgres://dodipbdfggqyte:XlvKUrEFuyTCT2Oagc4vU7jKXo@ec2-54-225-194-162.compute-1.amazonaws.com:5432/d8t7da2vk0jima';

var client = new pg.Client(connectionString);
client.connect();
var id=100663;
console.log("Client connected to database");
var query = client.query("SELECT unitid FROM ITEMS " ,function(err, result) {
      //err is the error returned from the PostgreSQL server
      //handle the error here
     if(!err)
         console.log(result);
     else
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
        console.log(JSON.stringify(rows));
        console.log(rows);
         client.end();
    });
   