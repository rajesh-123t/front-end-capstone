import React from "react";
import img_a from '../assets/restaurant.jpg';
import img_b from '../assets/Mario and Adrian b.jpg';
const About_section = () => {
  return (
    <div className='about'>
      <div className='item-about'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
      </div>
      <div className='item-about pos'>
        <img src={img_a} 
        style={
          {
            width:'200px',
            height:'300px',
            objectFit:'cover',
            position:'absolute',
            bottom:'50px',
            left:"90px",
            
          }
          }/>
        <img src={img_b}
        style={
          {
            width:'200px',
            height:'300px',
            objectFit:'cover',
            position:'absolute',
            bottom:'100px',
            left:"140px",
          }
          }
        />
      </div>
    </div>
  );
};

export default About_section;
