var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log("request made by " + req.url);
    res.writeHead(200, { 'content-type': 'application/json'});
   var myobj = {
    name: 'ankush',
    age : '20',
    year : '2000'
    }
    res.end(JSON.stringify(myobj));
    myReadStream.pipe(res);
});
server.listen(3000, '127.0.0.1');