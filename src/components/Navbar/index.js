import React from "react";
import { Link } from "react-router-dom";


function Navbar (){
    return (
        <nav className="navbar navbar-expand-lg py-0 navbar-dark bg-dark">
        <Link className="navbar-brand" id="logo" to="/">William Rodgers</Link>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">About <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/portfolio">Portfolio </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact </Link>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar;