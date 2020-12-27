const app = require('express')()
const wss = require('ws').createServer(app)
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Node Server is running. Yay!!")
})

//Socket Logic
const socketio = require('socket.io')(wss)

socketio.on("connection", (userSocket) => {
    console.log('Client connected');
    userSocket.on("send_message", (data) => {
        userSocket.broadcast.emit("receive_message", data)
    })
})

http.listen(PORT, ()=>console.log(`Listening on ${PORT}`))