import React from "react";
import { Link } from "react-router-dom";
import ProteinBar from '/home/nogal/spring-board/exercises/unit43/vending-machine/src/images/ProteinBar.webp'


function Snack1() {
    return (
        <div>
            <h1>Protein Bar!</h1>
            <img src={ProteinBar} alt="Protein Bar" style={{ width: '200px', height: 'auto'}} />
            <p>Crunchy and delicious!</p>
            <Link to="/">Back</Link>
        </div>
    );
}

export default Snack1;