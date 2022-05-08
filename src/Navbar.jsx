import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
        <h1>MD</h1>
        <div className="links">
            <Link to="/Assignment-4">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar