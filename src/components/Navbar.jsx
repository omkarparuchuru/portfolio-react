import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      < NavLink to="/" className="navbar-logo">My Portfolio</NavLink>
      <ul className="nav-links">
        <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
