#server side 
```npm i socket.io```

const http = require('http');

const { Server } = require('socket.io');

//initialization

const io = new Server(server, {
    cors: {
        origin:'*'
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
