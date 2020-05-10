const socket = require('socket.io-client');

// function init() {

    const socket = io(window.origin);

    socket.emit('join', 'Can I play?')

    socket.on('message', message => {
        console.log(message)
    });

// }