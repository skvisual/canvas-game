const socket = require('socket.io');

module.exports = function(server){
    var io = socket(server);
    const playerNamesArray = [];

    io.on('connection', (socket) => {

        // socket.on('message', (message) => {
        //     console.log(message)
        // })

        socket.on('join-room', (data) => {
            playerNamesArray.push(data.username);
            console.log(playerNamesArray);
            socket.join(data.room);
            // console.log(data.room)
            // socket.emit('message', data)
            // io.to(data.room).emit('message', `${data.username} has joined room ${data.room}`);
            io.to(data.room).emit('player-names-array', playerNamesArray);
            // io.sockets.emit('message', 'hello')
        })

    })

}
