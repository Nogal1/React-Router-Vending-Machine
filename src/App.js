import React from "react";
import { Route, Routes } from 'react-router-dom';
import VendingMachine from "./VendingMachine";
import Snack1 from "./Snack1";
import Snack2 from "./Snack2";
import Snack3 from "./Snack3";
import Navbar from "./Navbar";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" Component={VendingMachine} />
        <Route path="/Snack1" Component={Snack1} />
        <Route path="/Snack2" Component={Snack2} />
        <Route path="/Snack3" Component={Snack3} />
      </Routes>
    </div>
  );
}

export default App;
