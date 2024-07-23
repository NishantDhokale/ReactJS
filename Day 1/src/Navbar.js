import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div classname='navbar'>
        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Features</li>
            <li>About</li>
        </ul>

        <div classname="search-box">
            <input type="text" placeholder='Search'>
            </input>
        </div>
      
    </div>
  )
}

export default Navbar
