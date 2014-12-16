var express = require('express');
var dbProvider = require('./lib/DBProvider');
var app = express();
//var db = DBProvider();
/*
define parameters

app.param('id',/^\d+$/);

*/
app.get('/',function(req,res){
   res.send('Hello Word!');
});

app.get('/thread/:id',function(req,res){
   res.send("thread"+req.params.id);
  var conn = dbProvider.connect();
  dbProvider.close(conn);
});

//get ip
app.get('/ip',function(req,res){
  res.send(req.ip + "<br/>" + req.ips);
  console.log("Client IP:%s.",req.ip);
});

//Start server
var server = app.listen(8080,function(){

  var host=server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s",host,port);
});
