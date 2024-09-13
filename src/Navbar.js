import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <NavLink
            exact to="/"
            activeStyle={{ fontWeight: "bold", color: "black" }}
            >
                Home
            </NavLink>
            {" | "}
            <NavLink
            to="/Snack1"
            activeStyle={{ fontWeight: "bold", color: "black" }}
            >
                Protein Bar
            </NavLink>
            {" | "}
            <NavLink
            to="/Snack2"
            activeStyle={{ fontWeight: "bold", color: "black" }}
            >
                Sour Worms
            </NavLink>
            {" | "}
            <NavLink
            to="/Snack3"
            activeStyle={{ fontWeight: "bold", color: "black" }}
            >
                Potato Chips
            </NavLink>
        </nav>
    );
}

export default Navbar;