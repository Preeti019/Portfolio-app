import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
  <ul className="nav-menu">  
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About me</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <div className="nav-connect">Connect With Me</div>
</div>
  )
}

export default Navbar