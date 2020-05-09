import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import JoinGame from "./pages/JoinGame";
import CreateGame from "./pages/CreateGame";
import Lobby from "./pages/Lobby";
import Game from "./pages/Game";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div className="custom">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/joingame" component={JoinGame} />
          <Route exact path="/creategame" component={CreateGame} />
          <Route exact path="/lobby" component={Lobby} />
          <Route exact path="/game" component={Game} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
