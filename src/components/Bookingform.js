import React from 'react';
const Bookingform = ({state,dispatch,data,setData}) => {
  const handlesubmit=(e)=>{
    e.preventDefault();
    setData({
      date:"",
      time:"",
      guest:"",
      occasion:"",
    })
  }
  return (
    <div>
      <h1 style={{textAlign:"center",marginTop:"100px"}}>BOOK NOW</h1>
    <form style={{
      marginTop:"100px",
      display:"grid",
      maxWidth:'200px',
      gap:"20px",
      marginLeft:"auto",
      marginRight:"auto",
      }}
      onSubmit={handlesubmit}
      >
        <label htmlFor='res-date'>choose date</label>
        <input 
          type='date' 
          id='res-date' 
          value={data.date}
          onChange={(e)=>{
            setData({...data,date:e.target.value,time: ""})
            dispatch({type:e.target.value})
          }}
          required
          />
        <label htmlFor='res-time'>choose time</label>
        <select 
          id='res-time' 
          value={data.time}
          onChange={(e)=>setData({...data,time:e.target.value})}
          required
          disabled={!data.date}
          >
          <option value="">select</option>
          {state.map((time,index)=><option key={index} value={time}>{time}</option>)}
        </select>
        <label htmlFor='guests'>number of guests</label>
        <input 
          type='number' 
          placeholder='1' 
          min="1" max="10" 
          id="guests" 
          value={data.guest}
          onChange={(e)=>setData({...data,guest:parseInt(e.target.value) || ""})}
          required
        />
        <label htmlFor='occasion'>occasion</label>
        <select 
          id='occasion' 
          value={data.occasion}
          onChange={(e)=>setData({...data,occasion:e.target.value})}
        >
          <option value="">select</option>
          <option value="birthday">birthday</option>
          <option value="anniversary">anniversary</option>
        </select>
        <input 
          type='submit' 
          value="make your reservation" 
          disabled={!data.date || !data.time || !data.guest}/>
    </form>
    </div>
  );
}

export default Bookingform;
