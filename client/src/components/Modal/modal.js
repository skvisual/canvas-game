import React from "react";

function howToModal() {


    const hideModal = () => {
        window.location.reload()
    }

    return (
        <div>
            <button type="button" className="btn modal-button" data-toggle="modal" data-target="#exampleModal">Learn to Squiggle</button>

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <p class="mb-0">
                                    <button class="btn btn-link collapsed dropdown-header" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    ABOUT SQUIGGLEPIG
                                    </button>
                                </p>
                            </div>
                            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body">
                                <p className="dropdown-quote-text">Draw squiggles. Get giggles.</p>
                                <br></br><br></br>
                                The Squigglepig team wanted to develop a no-fills game that delivers an endless stream of creativity and fun.
                                <br></br><br></br>
                                Squigglepig's mix of drawing and player generated guesses is sure to get everyone rolling with laughter in the pen.
                                <br></br><br></br>
                                Create a room, draw some nonesense, make ridiculous captions.
                            </div>
                            <button class="btn btn-link collapsed dropdown-collapse" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            CLOSE SECTION
                            </button>
                        </div>

                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <p class="mb-0">
                                    <button class="btn btn-link collapsed dropdown-header" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    GETTING STARTED
                                    </button>
                                </p>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body">
                                <p className="dropdown-quote-text">Squigglin' isn't hard, but knowing how to get started is the first step!</p>
                                <br></br><br></br>
                                <h5 className="dropdown-body-header">GAME ROOM CREATION</h5>
                                <p className="dropdown-body-text">Squigglepig only requires one person to create a game room.</p>
                                    <p className="list-item">STEP 1</p>  The person creating the room uses a user-generated room name.<br></br><br></br>
                                    <p className="list-item">STEP 2</p> The game creator then sends the room name to anyone they want to include in their game.<br></br><br></br>
                                    <p className="list-item">STEP 3</p> Once submitted, you will be directed to the waiting room. DO NOT proceed further, wait for all players here. Their names will appear as they join.<br></br><br></br>
                                    <p className="list-item">STEP 4</p> Click "Start" to begin squigglin'!
                                    <br></br><br></br>                             
                                <p className="dropdown-body-header">JOIN AN EXISTING ROOM</p>
                                <p> At the Join Room menu, simply enter the game room code given to you.
                                <br></br>That's it, nothing else to do!
                                <br></br><br></br> Once you join a room, wait at the lobby screen until everyone has joined.</p>
                                <br></br>
                                <p className="dropdown-body-header">PLAYING THE GAME</p>
                                <p> During each turn one person will be selected to draw.<br></br><br></br>
                                 Once the drawing has been submitted, the remaining players will write a guess as to what it is, or a funny caption. <br></br><br></br>
                                 The person who drew that round will then select their favorite submission.<br></br><br></br>
                                 The selected submission, it's author and the drawing will then be displayed - announcing they have won.<br></br><br></br>
                                 When all players 'READY UP', the next round will begin.
                                </p>


                                </div>
                            <button class="btn btn-link collapsed dropdown-collapse" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            CLOSE SECTION
                            </button>
                        </div>
                    </div>
                    </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-dark" data-dismiss="" onClick={hideModal}>Close</button>                        
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default howToModal;