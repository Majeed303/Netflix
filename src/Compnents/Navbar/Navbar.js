import React from 'react'
import { useNavigate } from 'react-router-dom'
import  "./Navbar.css";

function Navbar() {
  const Navigate = useNavigate()

  window.onscroll = function() {
    var navbar = document.querySelector(".navbar");
    if (navbar) {
      if (window.scrollY > 0) {
        navbar.classList.add("scroll");
      } else {
        navbar.classList.remove("scroll");
      }
    }
  };
  
  return (
    
    <div className='navbar'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo" />
        
        <div className="navbar-buttons">
        <button className="login-button"  onClick={()=>Navigate('/')}>Login</button>
        </div>
        <img className='avatar' src="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg" alt="avtare" />
    </div>
  )
}

export default Navbar
