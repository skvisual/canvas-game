import React, { useState } from "react";
const io = require('socket.io-client');

const SocketContext = React.createContext({
    socket: {},
    joinRoom: () => {},
    onMessage: () => {}
});

    // const [username, setUsername] = useState();
    // const [room, setRoom] = useState();

    // const socket = io(window.origin);

    // socket.emit('message', 'hello server')

    

    // socket.on('message', (message) => {
    //     console.log(message)
    // })

export default SocketContext;