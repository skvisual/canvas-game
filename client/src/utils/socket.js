import React from "react";

const SocketContext = React.createContext({
    socket: {},
    username: '',
    room: '',
    playerNames: [],
    imageData: '',
    joinRoom: () => {},
    onMessage: () => {},
    populatePlayerNames: () => {},
    startGame: () => {},
    submitImage: () => {}
});

export default SocketContext;