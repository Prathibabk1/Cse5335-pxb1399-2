var redis = require('redis');
var fs = require('fs');
var jsonData;
var myCollection;
fs.readFile('input.json', 'utf8', function (err, data) {
  if (err) throw err;
  jsonData= JSON.parse(data);
});

var client = redis.createClient(16119, 'ec2-54-83-57-64.compute-1.amazonaws.com', {no_ready_check: true});
client.auth('p2vjfv8c4pi3uudr10b0cc1tcur', function (err) {
    if (err)
        console.log(err);
});

client.on('connect', function() {
    console.log('Connected to Redis');


for(var i=0; i<99; i++){
client.HMSET("UNITID"+jsonData[i].UNITID,{ "INSTNM":jsonData[i].INSTNM, "ADDR":jsonData[i].ADDR, "STABBR":jsonData[i].STABBR, "CITY":jsonData[i].CITY, "ZIP":jsonData[1].ZIP},function(err, result){
if(err)
console.log(err);
else{
console.log(result);
}
});

}
   
}); 

    
    


