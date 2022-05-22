import React, { useState } from 'react'
import "./Navbar.css"
import {FaBars, FaTimes} from "react-icons/fa"
import { Link, NavLink } from 'react-router-dom'
import {RiReactjsLine} from "react-icons/ri"

const Navbar = () => {
  const [click, setClick] = useState(false)

    const handleClick = () => {
      setClick(!click);
    };
  return (
    <nav className="navbar container">
      <div className="navbar__logo">
        <Link to="/" className="icon">
        <RiReactjsLine />
        </Link>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        {click ? <FaTimes className="icons" /> : <FaBars className="icons" />}
      </div>
      <div className={click ? "navbar__right active" : "navbar__right"}>
        <ul className="nav-link">
          <NavLink  className="li" to="/aboutUs">
            ABOUT US
          </NavLink>
          <Link className="li" to="/">
            BLOG
          </Link>
        </ul>
        <NavLink className="navbar__contact" to="/contact">
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar