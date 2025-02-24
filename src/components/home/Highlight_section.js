import React from "react";
import img1 from '../assets/greek salad.jpg';
import img2 from '../assets/bruchetta.svg';
import img3 from '../assets/lemon dessert.jpg';
const Highlights_section = () => {
      const data = [
          {
            id: 1,
            image: img1,
            name: "Greek Salad",
            price: "$12.99",
            description:
              "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.",
          },
          {
            id: 2,
            image: img2,
            name: "Bruschetta",
            price: "$8.99",
            description:
            "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
  
          },
          {
            id: 3,
            image: img3,
            name: "Lemon Dessert",
            price: "$5.99",
            description:
            "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
          },
        ];
        const className=["c","d","e"]
        const cards=data.map((item,index)=>(
        <div key={item.id} className={className[index]}>
          <img
          src={item.image}
          alt={item.name}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
          <div>
              <span>{item.name}</span>
              <span>{item.price}</span>
          </div>
          <p>{item.description}</p>
          <button>order a delivery</button>
        </div>
        ))
  return (

    <div className='highlights-section'>
      <div className='highlights'>
        <h1 className='a'>This weeks specials!</h1>
        <button className='b'>Online Menu</button>
        {cards}
    </div>
    </div>
  );
};

export default Highlights_section;
