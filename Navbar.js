import React from 'react'
import{NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div className='Nav'>
      <NavLink to ="/">Home</NavLink>
      <NavLink to ="/user">user</NavLink>
      <NavLink to ="/contact">Contact</NavLink>
    </div>
  )
}

export default Navbar
