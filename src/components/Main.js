import React from 'react';
import img_hero from '../assets/restauranfood.jpg';
import img1 from '../assets/greek salad.jpg';
import img2 from '../assets/bruchetta.svg';
import img3 from '../assets/lemon dessert.jpg';
import img_a from '../assets/restaurant.jpg';
import img_b from '../assets/Mario and Adrian b.jpg';
const Main = () => {
  return (
    <>
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
    </div>


    <div className='highlights-section'>
      <div className='highlights'>
        <h1 className='a'>This weeks specials!</h1>
        <button className='b'>Online Menu</button>
        <div className='c'>
            <img src={img1}  style={{width:"100%" ,height:"200px",objectFit:'cover'}}/>
          <div>
            <span>Greek salad</span>
            <span>$12.99</span>
          </div>
          <p>
          The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
          </p>
          Order a delivery
        </div>

        <div className='d'>
            <img src={img2} style={{width:"100%" ,height:"200px" ,objectFit:'cover'}}/>
          <div>
            <span>Bruchetta</span>
            <span>$12.99</span>
          </div>
          <p>
          Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. 
          </p>
          Order a delivery
        </div>

        <div className='e'>
            <img src={img3} style={{width:"100%" ,height:"200px" ,objectFit:'cover'}}/>
          <div>
            <span>lemon Dessert</span>
            <span>$12.99</span>
          </div>
          <p>
          This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
          </p>
          Order a delivery
        </div>
      </div>
    </div>


    <div className='testimonial'>
      <h1 className='heading'>
        testimonial
      </h1>
  <div className='container-testimonial'>

    <div className='rating'>
      <div>
        <span>4.1</span>
        <img></img>
      </div>
      <div>
        <img></img>
        <span>Ryan Holland</span>
      </div>
      <p>“delicious foods”</p>
    </div>

    <div className='rating'>
      <div>
        <span>4.2</span>
        <img></img>
      </div>
      <div>
        <img></img>
        <span>Julie Kent</span>
      </div>
      <p>“great hospitality and food is just amazing”</p>
    </div>

    <div className='rating'>
      <div>
        <span>4.0</span>
        <img></img>
      </div>
      <div>
        <img></img>
        <span>Kareena Patel</span>
      </div>
      <p>“favorite place for dineout”</p>
    </div>


    <div className='rating'>
      <div>
        <span>4.7</span>
        <img></img>
      </div>
      <div>
        <img></img>
        <span>Ron Smith</span>
      </div>
      <p>“I love food in this restaurant”</p>
    </div>



  </div>
    </div>

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
    </>
  );
};

export default Main;
