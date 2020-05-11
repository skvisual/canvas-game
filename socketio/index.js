const socket = require('socket.io');

module.exports = function(server){
    var io = socket(server);

    io.on('connection', (socket) => {

        // socket.emit('message', 'hello there')

        socket.on('message', (message) => {
            console.log(message)
        })

        socket.on('join-room', (data) => {
            console.log(data)
        })

    })

}
