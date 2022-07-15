import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <NavLink to="/"  style={({ isActive }) => ({
              color: isActive ? "gray" : "wheat",
              textDecoration: isActive ? "underline" : "none",
            })}> Home</NavLink>
        <NavLink to="/addmin_pannel"  style={({ isActive }) => ({
              color: isActive ? "gray" : "wheat",
              textDecoration: isActive ? "underline" : "none",
            })}> Addmin Pannel</NavLink>
    </div>
  )
}

export default Navbar