import React from "react";
import { Link } from "react-router-dom";
import PotatoChips from '/home/nogal/spring-board/exercises/unit43/vending-machine/src/images/PotatoChips.jpg'


function Snack3() {
    return (
        <div>
            <h1>Potato Chips!!</h1>
            <img src={PotatoChips} alt="Potato Chips" style={{ width: '200px', height: 'auto' }} />
            <p>Salty goodness!</p>
            <Link to ="/">Back</Link>
        </div>
    );
}

export default Snack3;