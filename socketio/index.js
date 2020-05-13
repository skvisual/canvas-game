const socket = require('socket.io');

module.exports = function(server){
    var io = socket(server);
    const playerNamesArray = [];
    var playerGuesses = [];
    var playersReadyCount = 0;

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

        socket.on('my-guess', (data) => {
            // check guess count
            console.log('a guess', data)
            playerGuesses.push({guess: data.myGuess, username: data.username})
            if(playerGuesses.length === playerNamesArray.length -1){
                socket.to(data.room).emit('all-guesses', playerGuesses);
            }

        })

        socket.on('the-winner', (data) => {
            console.log(data)
            io.to(data.room).emit('winner-result', {username: data.username, guess: data.guess});
        })

        socket.on('ready-up', (data) => {
            playersReadyCount += 1;
            console.log(playersReadyCount)
            console.log(playerNamesArray.length)
            if (playersReadyCount === playerNamesArray.length) {
                playerGuesses = [];
                playersReadyCount = 0;

                socket.broadcast.to(data).emit('to-game', 2);
                socket.emit('to-game', 1);
            }
        })
    })

}
