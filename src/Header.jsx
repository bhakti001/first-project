import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import {  RiArrowDropDownLine } from "react-icons/ri";
import Dropdown from './Dropdown';
function Header() {
    const [click, setClick] = useState(false);
    const [dropdown,setDropdown] = useState(false)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const onMouseEnter = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    };
  
    const onMouseLeave = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(false);
      }
    };
  
  return (
    <>
         <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img src="logo-removebg-preview.png"  alt="" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars/>}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                  Home
                </NavLink>
              </li>
            
              <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
  <Link to='/services' className='nav-links' onClick={closeMobileMenu} >
    Services <RiArrowDropDownLine/>
  </Link>
  {dropdown && <Dropdown />}
</li>
              <li className="nav-item">
                <NavLink to="/about" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                  About
                </NavLink>
               
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                  Contact
                </NavLink>
              </li>
              <li className='nav-item'>
              <NavLink to='/search' className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
              <FaSearch/>
              </NavLink></li>
            </ul>
          </div>
        </nav>
    </>
  )
}
export default Header;