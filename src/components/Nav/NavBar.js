import React from 'react'
import "../Nav/navbar.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <div className='navbar'>
            <Link to='/E-Commerce-React' className='navlink'>Home</Link>
            <Link to='signup' className='navlink'>SignUp</Link> 
        </div>
    </div>
  )
}

export default NavBar