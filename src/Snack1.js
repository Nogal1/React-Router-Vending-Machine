import React from "react";
import { Link } from "react-router-dom";

function Snack1() {
    return (
        <div>
            <h1>Snack 1</h1>
            <p>Crunchy and delicious!</p>
            <Link to="/">Back</Link>
        </div>
    );
}

export default Snack1;