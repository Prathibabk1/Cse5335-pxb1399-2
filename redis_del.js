var redis = require('redis');
var client = redis.createClient(16119, 'ec2-54-83-57-64.compute-1.amazonaws.com', {no_ready_check: true});
client.auth('p2vjfv8c4pi3uudr10b0cc1tcur', function (err) {
    if (err)
        console.log(err);
});

client.on('connect', function() {
    console.log('Connected to Redis');
});
client.del('100663', function (err, reply) {
    if (err) 
    console.log(err);
    console.log(reply.toString());
});
client.FLUSHDB(function(err,reply) {
    if (err) 
    console.log(err);
    console.log(reply.toString());
});
 client.quit();