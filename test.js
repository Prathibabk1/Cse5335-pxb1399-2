var pg = require('pg');
var connectionString =  'postgres://dodipbdfggqyte:XlvKUrEFuyTCT2Oagc4vU7jKXo@ec2-54-225-194-162.compute-1.amazonaws.com:5432/d8t7da2vk0jima';

var client = new pg.Client(connectionString);
client.connect();
console.log("Client connected to database");



 var query = client.query('select INSTNM from items');
    
    query.on('row', function(row) {
      console.log(row.INSTNM);
    });
    query.on('end', function() {
        client.end();
        console.log("done");
    });


