var redis = require('redis');
var prompt = require('prompt');
prompt.start();

  prompt.get(['city'], function (err, input) {
    if (err) { console.log(err); }
var str=input.city;
      
var client = redis.createClient(16119, 'ec2-54-83-57-64.compute-1.amazonaws.com', {no_ready_check: true});
client.auth('p2vjfv8c4pi3uudr10b0cc1tcur', function (err) {
    if (err)
        console.log(err);
});

client.on('connect', function() {
    console.log('Connected to Redis');
});

client.keys('*', function (err, replies) {

    replies.forEach(function (reply, i) {
        
        client.hgetall(reply,function(err,output){
                if(err)
                    console.log(err);
                else
                {
                    if(output.CITY==str)
                        console.log(output);   
                    
                }
            })
         
                  
                           
    })
     
    });

 });











