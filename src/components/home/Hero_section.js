import img_hero from '../assets/restauranfood.jpg';
import React from 'react';
const Hero_section = () => {
  return (
    <div className='hero-section'>
      <div className='hero-i1'>
        <h1>little lemon</h1>
        <h2>chicago</h2>
        <p>We are a family owned <br/>Mediterranean restaurant,<br/>focused on traditional<br/>recipes served with a mordern<br/>twist.</p>
        <button>reserve a table</button>
      </div>
      <div className='hero-i2'>
        <img src={img_hero} width="100%"
         height="300px"
        style={{
          objectFit:"cover",
        }}/>
      </div>
    </div>)
}
export default Hero_section;