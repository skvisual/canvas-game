import React from "react";

const SocketContext = React.createContext({
    socket: {},
    username: '',
    room: '',
    playerNames: [],
    joinRoom: () => {},
    onMessage: () => {},
    populatePlayerNames: () => {}
});

    // const [username, setUsername] = useState();
    // const [room, setRoom] = useState();

    // const socket = io(window.origin);

    // socket.emit('message', 'hello server')

    

    // socket.on('message', (message) => {
    //     console.log(message)
    // })

export default SocketContext;