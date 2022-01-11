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
                to='/movie-form'
                >
              Track a Movie
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/how-to'
            >
              How To
            </NavLink>
          </li>
        </ul>
      </nav>
      
    )
}
export default NavBar;