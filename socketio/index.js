const socket = require('socket.io');

module.exports = function(server){
    var io = socket(server);

    io.on('connection', (socket) => {

        socket.emit('message', 'hello there')

    })

}
