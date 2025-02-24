import React from 'react';

const Footer_item = ({title,items}) => {
    const list = items.map((item,index)=><li key={index}><button>{item}</button></li>)
    return (
        <div className='footer-item'>
        <h1>{title}</h1>
        <div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {list}
            </ul>
        </div>
      </div>
    );
};

export default Footer_item;
