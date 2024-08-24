import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navlogo"></div>
      <div className="opts">
        <ul>
          <div className="serv-dropdown">
            <a href="#" className='nav-a'>Services</a>
            <i class="fa-solid fa-angle-down"></i>
          </div>
          <a href="#" className='nav-a'>About Us</a>
          <a href="#" className='nav-a'>Contact Us</a>
          <div className="nav-btn">
            <button className='login'><a href="#">Login</a></button>
            <button className='button-green'><a href="#">Register</a></button>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
