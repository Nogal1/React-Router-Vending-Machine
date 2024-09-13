import React from "react";
import { Link } from "react-router-dom";
import SourWorms from '/home/nogal/spring-board/exercises/unit43/vending-machine/src/images/SourWorms.webp'

function Snack2() {
    return (
        <div>
            <h1>Sour Worms!!!</h1>
            <img src={SourWorms} alt="Sour Worms" style={{ width: '200px', height: 'auto'}} />
            <p>Yummy, sweet, sour!</p>
            <Link to="/">Back</Link>
        </div>
    );
}

export default Snack2;