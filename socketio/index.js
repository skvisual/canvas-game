const socket = require('socket.io');

module.exports = function(server){
    var io = socket(server);
    const playerNamesArray = [];

    io.on('connection', (socket) => {

        socket.on('join-room', (data) => {
            playerNamesArray.push(data.username);
            console.log(playerNamesArray);
            socket.join(data.room);
            io.to(data.room).emit('player-names-array', playerNamesArray);
        })

        socket.on('start-game', (room) => { 
            console.log('emitting to game')
            socket.broadcast.to(room).emit('to-game', 2);
            socket.emit('to-game', 1);
        })

        socket.on('image-submitted', (data) => {
            console.log('emitting guess-image')
            socket.broadcast.to(data.room).emit('guess-image', data.imageData);
            socket.emit('guess-image', 'wait');
        })

    })

}
