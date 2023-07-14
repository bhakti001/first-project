import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaBars, FaSearch, FaSun, FaTimes, FaUserCircle } from "react-icons/fa";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import {IoMdLogOut } from "react-icons/io";

import './Navbar.css'
function Navbar() {
    const [click, setClick] = useState(false);
    // const [dropdown,setDropdown] = useState(false)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    // const onMouseEnter = () => {
    //   if (window.innerWidth < 960) {
    //     setDropdown(false);
    //   } else {
    //     setDropdown(true);
    //   }
    // };
    // const onMouseLeave = () => {
    //   if (window.innerWidth < 960) {
    //     setDropdown(false);
    //   } else {
    //     setDropdown(false);
    //   }
    // };
    const [theme, setTheme] = useState('theme' ? 'dark' : 'light')
    const switchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme)
    }
    const navigate = useNavigate();
    const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
    function onLogout(){
      localStorage.removeItem('loggedIn',false)
      navigate("/login")
    }
  return (
    <>
         <nav className="navbar" data-theme={theme}>
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img src="logo-removebg-preview.png"  alt="" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars/>}
            </div>
            
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => "nav-links nav-about" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                <Link  to="/"  className='nav-links'>  Home </Link>
                </NavLink>
              </li>
              <li className='nav-item'    >
              <NavLink to="/services" className={({ isActive }) => "nav-links  " + (isActive ? " activated" : "")}  >
 Services
                      <Link  className='nav-dropdown'  > 
                  <Dropdown as={ButtonGroup} ><Dropdown.Toggle className='dropdown' style={{background:'none'}}/>
      <Dropdown.Menu className='dropdown-menu' >
        <Dropdown.Item  className='dropdown-item' ><Link to='/action' className='dropdown-link'  onClick={closeMobileMenu}  >Action</Link></Dropdown.Item>
        <Dropdown.Item className='dropdown-item'  ><Link to='/' className='dropdown-link'  onClick={closeMobileMenu}>Another action</Link></Dropdown.Item>
        <Dropdown.Item className='dropdown-item'  ><Link to='/contact' className='dropdown-link'  onClick={closeMobileMenu}>Something else</Link></Dropdown.Item>
      </Dropdown.Menu></Dropdown> 
                      </Link>
                      </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className={({ isActive }) => "nav-links nav-about" + (isActive ? " activated" : "" )} onClick={closeMobileMenu}>
                <Link to="/about" className='nav-links'>  About </Link>

                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className={({ isActive }) => "nav-links nav-about" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                <Link to="/contact" className='nav-links'> Contact  </Link>
                 
                </NavLink>              
              </li>  
              {
                loggedIn ? 
                <li><Link onClick={onLogout} to='/login' className='logouticon' style={{fontSize:'10px', color:'white', textDecoration:'none'}} ><IoMdLogOut style={{fontSize:'22px' , color:'#06877f' , marginBottom:'-15px'}}></IoMdLogOut><br /> log out</Link></li>                :
              <>
              <li className="nav-item">
                <NavLink to="/login" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                <FaUserCircle></FaUserCircle>
                </NavLink>
              </li> 
             </>
              } 
              <li className='nav-item'>
              <NavLink to='/search' className={({ isActive }) => "nav-links nav-about" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
              <FaSearch/>
              </NavLink></li>
              
              <div className='theme-toggle' >
          <FaSun onClick={switchTheme}  ></FaSun>
        </div>
            </ul>
          </div>
        </nav>
    </>
  )
}
export default Navbar;