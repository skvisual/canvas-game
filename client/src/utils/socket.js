import React from "react";

const SocketContext = React.createContext({
    socket: {},
    username: '',
    room: '',
    playerNames: [],
    imageData: '',
    myGuess: '',
    allGuesses: [],
    winner: '',
    joinRoom: () => {},
    onMessage: () => {},
    populatePlayerNames: () => {},
    startGame: () => {}
    // submitImage: () => {}
});

export default SocketContext;