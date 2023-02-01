import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {


  
  return (
    <nav className='dm-navbar'>
        <div className='dm-navbar-link-logo'>
          <Link to='/'><img src='https://www.shutterstock.com/image-vector/abstract-initial-letter-d-m-260nw-1829787410.jpg' alt='no-pic' className='logo'/></Link>
        </div>
        <ul className='dm-navbar-link-list'>
        <li><Link className='dm-navbar-link' to='/'>Home</Link></li>
        <li><Link className='dm-navbar-link' to='/whatGPT3'>What is DM-creative?</Link></li>
        <li><Link className='dm-navbar-link' to='/possibility'>Open AI</Link></li>
        <li><Link className='dm-navbar-link' to='/blog'>Case Studies</Link></li>
        <li><Link className='dm-navbar-link' to='/feature'>Library</Link></li>
        <li><Link className='dm-navbar-link' to='/login'>Sign Up/Sign in</Link></li>
        </ul>
        <div className='dm-menu'>
        <ion-icon name="menu"></ion-icon>
        </div>

    </nav>
  )
}

export default Navbar