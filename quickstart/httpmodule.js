const express = require('express');
var http = require('http');
var dt = require('./myfirstmodule');
var url = require('url');



http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write("The date and time are currently: "+ dt.myDateTime());
    res.write("\n"+req.url);
    res.end();
}).listen(8080);