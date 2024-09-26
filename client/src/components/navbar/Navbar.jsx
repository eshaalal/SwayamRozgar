import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="container">
      <div className="logo">
      <span className='text' >LABOUR</span>
      
      <span></span>
      </div>
      
      <div className="links">
        <a href="#about">AbOUT</a>
        <a href="#hire">Hiring Freelancer</a>
        <a href="#find-work">Find works</a>
        <a href="#signin">Signin</a>
        <button id='bt1' >Register</button>
      </div>
      </div>
      
    </nav>
  )
}

export default Navbar
