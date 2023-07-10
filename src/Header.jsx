import React, {  useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaBars,  FaTimes,  FaUserCircle } from "react-icons/fa";
import {IoMdLogOut } from "react-icons/io";

function Header() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const navigate = useNavigate();
    const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
    function onLogout(){
      localStorage.removeItem('loggedIn',false)
      navigate("/login")
    }
  return (
    <>
         <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img src="logo.png"  alt="" />
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
              {
                loggedIn ? 
                <li><Link onClick={onLogout} to='/login' className='logouticon' ><IoMdLogOut/></Link></li>                :
              <>
              <li className="nav-item">
                <NavLink to="/login" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                <FaUserCircle/>
                </NavLink>
              </li> 
             </>
              }
            </ul>
          </div>
        </nav>
    </>
  )
}

export default Header;