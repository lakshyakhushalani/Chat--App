const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

io.on("connection",(socket)=>{
    console.log("A user connected");
})

app.get("/",(req,res)=>{
    // res.sendFile(publicPath);
    res.send("Welcome to chat app");
});

server.listen(port,()=>{
    console.log(`server is lostening to the port ${port}`);
})
