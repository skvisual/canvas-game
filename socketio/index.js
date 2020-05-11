const socket = require('socket.io');

module.exports = function(server){
    var io = socket(server);

    io.on('connection', (socket) => {

        socket.on('message', (message) => {
            console.log(message)
        })

        socket.on('join-room', (data) => {
            console.log(data)
            socket.emit('message', 'hello there')
            
        })

    })

}
