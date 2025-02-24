import React from 'react';
import footer from '../assets/restauranfood.jpg';
import { Link } from 'react-router-dom';
const Footer_section = () => {
  return (
    <>
    <div className='footer'>
    <div className='footer-item'>
      <img src={footer} width="100%" height="200px" style={{objectFit:'cover'}}/>
    </div>
    <div className='footer-item'>
      <h1>Doormant navigation</h1>
    <ul className="footer-nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">about</Link></li>
      <li><Link to="/menu">menu</Link></li>
      <li><Link to="/reservation">reservation</Link></li>
      <li><Link to="/order-online">order online</Link></li>
      <li><Link to="/login">login</Link></li>
    </ul>  
    </div>
    <div className="footer-item">
    <h1>contact</h1>
      <ul className="footer-nav">
        <p>address</p>
        <p>phone number</p>
        <p>email</p>
      </ul>
    </div>
    <div className="footer-item">
    <h1>social media links</h1>
      <ul className="footer-nav">
        <p>address</p>
        <p>phone number</p>
        <p>email</p>
      </ul>
    </div>
  </div>
    </>
  );
};

export default Footer_section;

