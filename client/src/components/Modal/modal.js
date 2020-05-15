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
                            <div id="collapseOne" class="collapse" aria-labelledby="headingOne"         data-parent="#accordionExample">
                            <div class="card-body">
                                Live. Laugh. Love?<br></br>
                                More Like<br></br>
                                Draw. Guess. Laugh. Repeat.
                                <br></br><br></br>
                                The Squigglepig team wanted to develop a no-fills game that delivers an endless stream of creativity and gut-busting laughter.
                                <br></br><br></br>
                                Squigglepig gets your friends and family rolling with laughter in the pen.
                                <br></br><br></br>
                                Create a room, draw some nonesense, make ridiculous guesses
                            </div>
                            <button class="btn btn-link collapsed dropdown-collapse" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            CLOSE SECTION
                            </button>
                        </div>

                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <p class="mb-0">
                                    <button class="btn btn-link collapsed dropdown-header" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Getting Started
                                    </button>
                                </p>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingOne"         data-parent="#accordionExample">
                            <div class="card-body">
                                Squigglin' isn't hard, but knowing how to get started is the first step!
                                <br></br><br></br>
                                <h5 className="dropdown-body-header">GAME ROOM CREATION</h5>
                                <p className="dropdown-body-text">Squigglepig only requires one person to create a game room.</p>
                                <p>
                                    - The person creating the room uses a self-generated game room name. 
                                    <br></br>
                                    - The game creator then sends the unique room name to anyone they want to include in their game.
                                    <br></br>
                                </p>

                                <p className="dropdown-body-header">JOIN AN EXISTING ROOM</p>
                                <p className="dropdown-body-text">EXPLAIN IT HERE BRO.</p>
                               

                            </div>
                            <button class="btn btn-link collapsed dropdown-collapse" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            CLOSE SECTION
                            </button>
                        </div>

                    </div>
                    </div>
                        <div class="modal-footer">
                        <button type="button" class="btn" data-dismiss="" onClick={hideModal}>Close</button>                        
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default howToModal;