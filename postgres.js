var pg = require('pg');
var connectionString =  'postgres://dodipbdfggqyte:XlvKUrEFuyTCT2Oagc4vU7jKXo@ec2-54-225-194-162.compute-1.amazonaws.com:5432/d8t7da2vk0jima';

var client = new pg.Client(connectionString);
client.connect();
console.log("Client connected to database");
var query = client.query('CREATE TABLE items(UNITID integer PRIMARY KEY, INSTNM VARCHAR(40), ADDR VARCHAR(100),CITY VARCHAR(40),STABBR VARCHAR(40),ZIP VARCHAR(40))');

query.on('end', function() { client.end(); });
console.log("table created");