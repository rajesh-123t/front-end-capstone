import React from "react";
const MyComponent = () => {
  const data=[
    {
        id:1,
        rate:"4.1",
        name:"Ryan Holland",
        comment:"delicious foods",
    },
    {
        id:2,
        rate:"4.2",
        name:"Ron Smith",
        comment:"I love food in this restaurant",
    },
    {
        id:3,
        rate:"4.1",
        name:"Julie Kent",
        comment:"great hospitality and food is just amazing",
    },
    {
        id:4,
        rate:"4.0",
        name:"Kareena Patel",
        comment:"favorite place for dineout",
    },
];
const rating=data.map((item)=>(
    <div className="rating" key={item.id}>
        <div>
            <span>{item.rate}</span>
            <img></img>
        </div>
        <div>
            <img></img>
            <span>{item.name}</span>
        </div>
        <p>{item.comment}</p>
    </div>
))
  return (
<div className='testimonial'>
<h1 className='heading'>
  testimonial
</h1>
<div className='container-testimonial'>
    {rating}
    </div>
</div>
  );
};

export default MyComponent;
