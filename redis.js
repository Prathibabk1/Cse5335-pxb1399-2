var redis = require('redis');
var client = redis.createClient(16119, 'ec2-54-83-57-64.compute-1.amazonaws.com', {no_ready_check: true});
client.auth('p2vjfv8c4pi3uudr10b0cc1tcur', function (err) {
    if (err) then throw err;
});

client.on('connect', function() {
    console.log('Connected to Redis');
});