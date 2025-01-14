import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo_dark.png'

const Navbar = () => {
  return (
    <div className='nav-bar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
            <li>Home</li>
            <li>About</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">Connect with me</div>
    </div>
  )
}

export default Navbar