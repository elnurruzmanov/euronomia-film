import React, { useState } from "react";
import "./Navbar.css";

//router
import { Link, NavLink } from "react-router-dom";
// import { useState } from "react";

//images
// import NavMenu from "../../icons/navMenu.png";
// import NavExit from "../../icons/navExit.png";

const Navbar = () => {

  const[isOpen, setIsOpen]=useState(false)

  return (
    <div className="navbar">

        <ul className={`navbar-list ${isOpen && "open"}`}>
          <li className="navbar-item">
            <NavLink className="navbar_link" to="/about">
              About us
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink className="navbar_link" to="/projects">
              Projects
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink className="navbar_link link2" to="/">
              <h1 className="navbar_link-title">EUNOMIA </h1>FILM
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink className="navbar_link" to="/founders">
              Founders
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink className="navbar_link" to="/nft">
              NFT
            </NavLink>
          </li>
        </ul>

        <div className="link3">
          <Link to="/" className="menu-link"><h1 className="navbar_link-title">EUNOMIA </h1>FILM</Link>
        </div>
        <div className={`nav-toggle ${isOpen && "open"}`} onClick={()=>setIsOpen(!isOpen)}>
          <div className="bar"></div>
        </div>
    </div>
  );
};



export default Navbar;





