import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Navbar = () => {
  return (
    <div className='navbar-div'> 
    <nav>
        <ul className='ulll'>
            <li className='li'><Link className='link' to='/'>Home</Link></li>
            <li className='li'><Link className='link' to='/add-card'>Add Card</Link></li>
            <li className='li'><Link className='link' to='/wishlist'>Wishlist</Link></li>
            <li className='li'><Link className='link' to='/'>Services</Link></li>
            <li className='li'><Link className='link' to='/'>About Us</Link></li>
            <li className='li'><Link className='link' to='/'>Contact</Link></li>
            <li className='li'>
              <i className="fa-solid fa-phone-volume icon"></i>
              <p className='p'>+825 25 800 800</p>
            </li>
            <li className='li'>
              <i className="fa-regular fa-envelope icon"></i>
              <p className='p'>office@invest.com </p>
            </li>
            <li className='li'>
              <i className="fa-solid fa-magnifying-glass icons"></i>
            </li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar