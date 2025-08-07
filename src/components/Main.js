import React, { useReducer } from 'react';
import BookingForm from './BookingForm';


const initializeTimes = () => {
  const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
  return fetchAPI(today); // fetchAPI is globally available from the script
};

const updateTimes = (state, selectedDate) => {
  return fetchAPI(selectedDate);
};

/* // Initial available times (can be dynamic later)
const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};
 */
// Reducer function to update times based on selected date
/* const updateTimes = (state, selectedDate) => {
  // Future: fetch available times based on selectedDate
  console.log('Updating times for date:', selectedDate);
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};
 */
function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <h1>Book a Table</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
}

export default Main;