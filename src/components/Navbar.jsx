import React from 'react'
import './navbar.css'

function Navbar({nav}) {
  return (
    <li>
        <a href={nav.link}>{nav.name}</a>
    </li>
   
  )
}

export default Navbar