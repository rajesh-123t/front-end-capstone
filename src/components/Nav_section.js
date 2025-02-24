import React from 'react';
import logo from './assets/Logo .svg'
import { Link } from 'react-router-dom';
const Nav_section = () => {
  return (
    <div className='nav'>
    <img src={logo}/>
    <ul className="navigation">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">about</Link></li>
      <li><Link to="/menu">menu</Link></li>
      <li><Link to="/reservation">reservation</Link></li>
      <li><Link to="/order-online">order online</Link></li>
      <li><Link to="/login">login</Link></li>
    </ul>
    </div>
  );
};
export default Nav_section;
