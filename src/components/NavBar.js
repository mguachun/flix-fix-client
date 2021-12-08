import React from 'react'
import { NavLink } from 'react-router-dom';
import "../NavBar.module.css"
const NavBar = () => {
    return (
        <nav classname="nav">
        <ul>
          <li>
            <NavLink 
                to='/'
                >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    )
}
export default NavBar