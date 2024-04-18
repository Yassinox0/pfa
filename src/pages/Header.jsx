import React from 'react'
import Navbar from '../components/Navbar'
import './header.css'
import NavbarData from '../data/NavbarData'
import Search from '../components/Search'

function Header() {
  return (
    <header>
      <a href="/" className="logo"> MovieMingle </a>
      <ul className='nav'>
        {NavbarData.map(nav =>(
                <Navbar key={nav._id} nav={ nav}/>
            ))}
      </ul>
      < Search />
        </header>
        
  )
}

export default Header