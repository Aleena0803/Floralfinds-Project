import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import navProfile from '../../assets/navProfile.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" className="nav-logo"  />
        <p>FLORALFINDS</p>
        <img src={navProfile} className="navProfile" alt="" />
    </div>
  )
}

export default Navbar