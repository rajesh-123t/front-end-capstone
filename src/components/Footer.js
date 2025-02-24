import React from 'react';
import footer from '../assets/restauranfood.jpg';
import Footer_item from './Footer_item';
const Footer = () => {
  return (
    <>
    <div className='footer'>
    <div className='footer-item'>
      <img src={footer} width="100%"/>
    </div>
    <Footer_item title="Doormat Navigation" items={["Home","About","Menu","Reservation","order online","login"]}/>
    <Footer_item title="contact" items={["adress","phone number","menu"]}/>
    <Footer_item title="social media links" items={["adress","phone number","menu"]}/>
  </div>
    </>
  );
};

export default Footer;
