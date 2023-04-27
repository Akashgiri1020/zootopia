import React from "react";
import "../CSS/Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <div className="menu">
        <ul>
          <li className="logo">
            <img src="Images/logo.jpg" alt="logo"/>
          </li>
          <li className="active">
          <Link to="/" className="about links">Home</Link>
          </li>
          
          <li>
            <Link to="about us/about us.html" className="about links">About Us</Link>
          </li>
          <li>
            <Link to="about us/about us.html" className="about links">About Us</Link>
            
          </li>
          <li> 
            <Link to="about us/about us.html" className="about links">About Us</Link>
          </li>
          <li>
            <Link to="/TradingCard" className="signup-btn"><span>Sign Up</span></Link>
            
          </li>
        </ul>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
};

export default Navbar;
