import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import JoinGame from "./pages/JoinGame";
import CreateGame from "./pages/CreateGame";
import Lobby from "./pages/Lobby";
import Drawing from "./pages/Drawing";
import Waiting from "./pages/Waiting";
import Guessing from "./pages/Guessing";
import Decision from "./pages/Decision";
import Winner from "./pages/Winner";
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
          <Route exact path="/drawing" component={Drawing} />
          <Route exact path="/waiting" component={Waiting} />
          <Route exact path="/guessing" component={Guessing} />
          <Route exact path="/decision" component={Decision} />
          <Route exact path="/winner" component={Winner} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
