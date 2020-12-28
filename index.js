var express = require('express');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', function (socket) {
    console.log(socket.id, 'joined');
    socket.on('/test', function (msg) {
        console.log(msg);
    });
});

var port = 8080;
console.log(port);
server.listen(port);