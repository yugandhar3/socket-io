const express = require('express');
const http = require('http'); // Import http module
const { Server } = require('socket.io'); // Import Server class from socket.io

const app = express();
const server = http.createServer(app); // Create HTTP server
const io = new Server(server, {
    cors: {
        origin: '*'
    }
})


io.on('connection', (socket) => {
    console.log('a user connected');

    socket.emit('Welcome', "welcome to my channel");

    socket.on('msg', (data) => {
        console.log("msg", data);
    });
});

server.listen(3001, () => {
    console.log('listening on *:3001');
});
