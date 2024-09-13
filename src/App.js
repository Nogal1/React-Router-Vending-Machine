import React from "react";
import { Route, Switch } from 'react-router-dom';
import VendingMachine from "./VendingMachine";
import Snack1 from "./Snack1";
import Snack2 from "./Snack2";
import Snack3 from "./Snack3";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" Component={VendingMachine} />
        <Route exact path="/Snack1" Component={Snack1} />
        <Route exact path="/Snack2" Component={Snack2} />
        <Route exact path="/Snack3" Component={Snack3} />
      </Switch>
    </div>
  );
}

export default App;
