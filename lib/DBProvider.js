var mysql = require("mysql");
var defaultOptions = {
   "host":"127.0.0.1",
   "port":3306,
   "database":"ehangsoft",
   "user":"vincent",
   "password":"dsq120714"
 }

exports.connect = function(options){
  console.log("Connection test.");
  var connpara = options?options:defaultOptions;
  var connStr = connpara.user+":"+connpara.password
                +"@"+connpara.host;
  console.log(connStr);
  var conn = mysql.createConnection(connpara);

  return conn;
};

exports.close = function(conn){
  if(conn){
   conn.end();
  }
};
