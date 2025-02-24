import React, { useReducer } from 'react';
import Bookingform from './Bookingform';
import { useState } from 'react';
export function updateTime(state,action){
  switch(action.type){
      case "2020-09-09":
      return ['19:00','20:00'];
      case "2020-09-10":
      return ['15:00','16:00'];
      case "2020-09-11":
      return['12:00','13:00'];
      default:
          return state;
  }
}
export function initializerTimes(){
  return [];
}
const BookingPage = () => {
    const [data,setData] =useState({
        date:"",
        time:"",
        guest:"",
        occasion:"",
        })

    const [state,dispatch]=useReducer(updateTime,[],initializerTimes)
  return (
    <>
    <Bookingform 
                dispatch={dispatch} 
                data={data}
                state={state}
                setData={setData}/>
    </>
  )
};

export default BookingPage;
