import { render, screen } from "@testing-library/react";
import BookingForm from './components/Bookingform';
import { initializerTimes } from "./components/BookingPage";
import { updateTime } from "./components/BookingPage";
test('Renders the BookingForm heading', () => {
    const mockdata = {        
      date:"",
      time:"",
      guest:"",
      occasion:"",
    }
    const mockstate=[]
    const dispatch =jest.fn()
    const setData =jest.fn()
    render(<BookingForm
                                        data={mockdata}
                                        state={mockstate}
                                        dispatch={dispatch}
                                        setData={setData}
       />);
    const headingElement = screen.getByText(/BOOK NOW/i);
    expect(headingElement).toBeInTheDocument();
})
test('test for the initializeTimes function to validate that it returns the correct expected value.',()=>{
expect(initializerTimes()).toEqual([])
})
test(' test for the updateTimes function to validate that it returns the same value that is provided in the state.',()=>{
  const mockstate=['11:00',"12:00"]
  const mockaction=""
  expect(updateTime(mockstate,mockaction)).toEqual(mockstate)
})
