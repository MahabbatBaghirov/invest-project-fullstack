import React from 'react';
import './style.css';

const Header = () => {
  return (
    <div className='header-div'>
    <header>
      <div className="common">
        <div className='img'>
          <img src="https://preview.colorlib.com/theme/invest/images/logo.png" alt="" />
        </div>
        <div className='txt'>
          <div className='text'>
          <span className='yellow'>in</span>
          vest
          </div>
          <div className='blockchain'>Blockchain</div>
        </div>
      </div>
      <div className="right">
        <div className="ul-list">
        <ul className='ul'>
          <li className='dollar'>BTC $10200</li>
          <li className='dollar'>ETH $979</li>
          <li className='dollar'>LTC $230</li>
        </ul>
        </div>
        <div className="login-register">
        <a className='register' href="http://google.com">Register</a>
        <div className='line'></div>
        <a className='login' href="http://google.com">Login</a>
        </div>
      </div>
    </header>
    </div>
  )
}

export default Header