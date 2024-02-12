#server side 
```npm i socket.io```

const http = require('http');

const { Server } = require('socket.io');

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000", // Allow requests only from this origin
        methods: ["GET", "POST"] // Allow only specified methods
    }
});

io.on('connection', (socket) => {
   // sending data to client
    socket.emit('Welcome', "welcome to my channel");

  // reciving dat from client
    socket.on('msg', (data) => {
        console.log("msg", data);
    });
});
