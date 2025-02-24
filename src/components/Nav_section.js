import React from 'react';
import logo from '../assets/Logo .svg'
const Nav_section = () => {
  return (
    <div className='nav'>
    <img src={logo}/>
    <ul className="navigation">
      <li><a href='index.html'>Home</a></li>
      <li><a href='index.html'>About</a></li>
      <li><a href='index.html'>Menu</a></li>
      <li><a href='index.html'>Reservation</a></li>
      <li><a href='index.html'>Order Online</a></li>
      <li><a href='index.html'>Login</a></li>
    </ul>
    </div>
  );
};
export default Nav_section;
