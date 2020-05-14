const socket = require('socket.io');

module.exports = function(server){
    var io = socket(server);
    const playerNamesArray = [];
    var playerGuesses = [];
    var playersReadyCount = 0;

    io.on('connection', (socket) => {

        socket.on('join-room', (data) => {
            
            // playerNamesArray.push(data.username);

            socket.join(data.room);

            if(!io.sockets.adapter.rooms[data.room].playerNamesArray){
                console.log('initiate variables')
                io.sockets.adapter.rooms[data.room].playerNamesArray = []
                io.sockets.adapter.rooms[data.room].playerGuesses = []
                io.sockets.adapter.rooms[data.room].playersReadyCount = 0
            }
            
            io.sockets.adapter.rooms[data.room].playerNamesArray.push(data.username)

            // console.log(io.sockets.adapter.rooms[data.room].playerNamesArray)

            io.to(data.room).emit('player-names-array', io.sockets.adapter.rooms[data.room].playerNamesArray);
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

        socket.on('my-guess', (data) => {
            // check guess count
            console.log('a guess', data)
            io.sockets.adapter.rooms[data.room].playerGuesses.push({guess: data.myGuess, username: data.username})
            if(io.sockets.adapter.rooms[data.room].playerGuesses.length === io.sockets.adapter.rooms[data.room].playerNamesArray.length -1){
                io.to(data.room).emit('all-guesses', io.sockets.adapter.rooms[data.room].playerGuesses);
            }

        })

        socket.on('the-winner', (data) => {
            console.log(data)
            io.to(data.room).emit('winner-result', {username: data.username, guess: data.guess});
        })

        socket.on('ready-up', (data) => {
            io.sockets.adapter.rooms[data].playersReadyCount += 1;
            console.log(io.sockets.adapter.rooms[data].playersReadyCount)
            console.log(io.sockets.adapter.rooms[data].playerNamesArray.length)
            if (io.sockets.adapter.rooms[data].playersReadyCount === io.sockets.adapter.rooms[data].playerNamesArray.length) {
                io.sockets.adapter.rooms[data].playerGuesses = [];
                io.sockets.adapter.rooms[data].playersReadyCount = 0;

                socket.broadcast.to(data).emit('to-game', 2);
                socket.emit('to-game', 1);
            }
        })
    })

}
