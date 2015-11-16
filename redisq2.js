var redis = require('redis');
require('node-redis-streamify')(redis);
var client = redis.createClient(16119, 'ec2-54-83-57-64.compute-1.amazonaws.com', {no_ready_check: true});
client.auth('p2vjfv8c4pi3uudr10b0cc1tcur', function (err) {
    if (err)
        console.log(err);
});

client.on('connect', function() {
    console.log('Connected to Redis');
});


var
    key = '1*'
    pattern = 'city:Phoenix',
    count = 1,
    hscan = redis.streamified('HSCAN'); // case insensitive 
 
client.hscan(key, pattern, count)
    .on('data', function (data) { console.log(data);})
    .on('error', function (error) {console.log(error);})
    .on('end', function () {client.end();});













