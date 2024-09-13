import React from "react";
import { Link } from 'react-router-dom';

function VendingMachine() {
    return (
        <div>
            <h1>Vending Machine!</h1>
            <h2>Choose your snack:</h2>
            <ul>
                <li><Link to="/Snack1">Protein Bar</Link></li>
                <li><Link to="/Snack2">Sour Worms</Link></li>
                <li><Link to="/Snack3">Potato Chips</Link></li>
            </ul>
        </div>
    );
}

export default VendingMachine;