import React from 'react';
import footer from '../assets/restauranfood.jpg';
const Footer = () => {
  return (
    <>
    <div className='footer'>
    <div className='footer-item'>
      <img src={footer} width="100%"/>
    </div>

    <div className='footer-item'>
      <h1>Doormat Navigation</h1>
      <div>
        <button>Home</button><br/>
        <button>About</button><br/>
        <button>menu</button><br/>
        <button>Reservations</button><br/>
        <button>Order Online</button><br/>
        <button>Login</button><br/>
      </div>
    </div>

    <div className='footer-item'>
      <h1>Contact</h1>
      <div>
        <button>Address</button><br/>
        <button>phone number</button><br/>
        <button>menu</button><br/>
      </div>
    </div>

    <div className='footer-item'>
      <h1>Social Media Links</h1>
      <div>
        <button>Address</button><br/>
        <button>phone number</button><br/>
        <button>menu</button><br/>
      </div>
    </div>

  </div>
    </>
  );
};

export default Footer;
