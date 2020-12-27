var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server)

app.get('/', (req, res) => {
    res.send("Node Server is running. Yay!!")
})

//Socket Logic
const socketio = require('socket.io')(http)

io.socket.on("connection", (userSocket) => {
    userSocket.on("send_message", (data) => {
        userSocket.broadcast.emit("receive_message", data)
    })
})

server.listen(process.env.PORT || 3000);