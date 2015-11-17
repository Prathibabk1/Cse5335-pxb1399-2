var redis = require('redis');
var prompt = require('prompt');
prompt.start();

  prompt.get(['key'], function (err, input) {
    if (err) { console.log(err); }
var str=input.key;
var key=parseInt(str);
var client = redis.createClient(16119, 'ec2-54-83-57-64.compute-1.amazonaws.com', {no_ready_check: true});
client.auth('p2vjfv8c4pi3uudr10b0cc1tcur', function (err) {
    if (err)
        console.log(err);
});

client.on('connect', function() {
    console.log('Connected to Redis');
});

client.hgetall(key, function(err, object) {
    if(err)
        console.log(err);
    else
        console.log(object);
});

});


