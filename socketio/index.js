const socket = require('socket.io');

module.exports = function(server){

    var io = socket(server); // Create a variable to hold our socket connection. Use our server as a parameter for socket to connect.
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

            // the to() method controls where the data is sent (i.e. a specfic room) The emit() method defines what data we will transmit. 
            io.to(data.room).emit('player-names-array', io.sockets.adapter.rooms[data.room].playerNamesArray);  
        })

        // Use the on() method to listen for the start game event. 
        // broadcast.to() allows us to transmit data to a specific room. The emit() method listens for the 'to-game' event. The client that sends the start-game event, will be taken to the draw screen. While the other clients in the room will be sent to the waiting for guesses screen. 
        socket.on('start-game', (room) => { 
            socket.broadcast.to(room).emit('to-game', 2);
            socket.emit('to-game', 1);
        })
        // Once the image is submitted, use broadcast to send the image to all connected clients. 
        socket.on('image-submitted', (data) => {
            console.log('emitting guess-image')
            socket.broadcast.to(data.room).emit('guess-image', data.imageData);
            // Once image is sent, send the person who drew, to the wait screen while others create their submission.
            socket.emit('guess-image', 'wait');
        })
        // 
        socket.on('my-guess', (data) => {
            // check guess count
            console.log('a guess', data)
            // we then push the guess data to the playerGuesses array. Using adapter.rooms to create a seperate instance of the array.
            io.sockets.adapter.rooms[data.room].playerGuesses.push({guess: data.myGuess, username: data.username})
            // listens for all player guesses. Once all are submitted, the game will continue to the next step.
            if(io.sockets.adapter.rooms[data.room].playerGuesses.length === io.sockets.adapter.rooms[data.room].playerNamesArray.length -1){
                // Below is what actually sends the data to the connected clients.
                io.to(data.room).emit('all-guesses', io.sockets.adapter.rooms[data.room].playerGuesses);
            }

        })
        // Once a caption is chosen the server listens for 'the-winner' event.
        // sends all connected clients to the winner.js screen which has the username, caption and picture attached. 
        socket.on('the-winner', (data) => {
            console.log(data)
            io.to(data.room).emit('winner-result', {username: data.username, guess: data.guess});
        })

        // when a player ready's up. increment the playerreadycount by 1. Will listen until all players are ready. When all are ready, players will be sent to either the draw, or wait screen.
        socket.on('ready-up', (data) => {
            io.sockets.adapter.rooms[data].playersReadyCount += 1;
            if (io.sockets.adapter.rooms[data].playersReadyCount === io.sockets.adapter.rooms[data].playerNamesArray.length) {

                io.sockets.adapter.rooms[data].playerGuesses = [];
                io.sockets.adapter.rooms[data].playersReadyCount = 0;

                socket.broadcast.to(data).emit('to-game', 2);
                socket.emit('to-game', 1);
            }
        })
    })

}
