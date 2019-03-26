import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            Pupster
          </Link>
        <ul className="nav navbar-nav">
          <li className="nav-item">          
            <Link to="/about" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
              About
            </Link>
          </li>
          <li className="nav-item">              
            <Link to="/discover" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Discover
            </Link>
          </li>
          <li className="nav-item">              
            <Link to="/search" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Search
            </Link>
          </li>
        </ul>
    </nav>
  );
}

export default Navbar;