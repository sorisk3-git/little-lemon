/* global fetchAPI */
import React, { useState, useEffect } from 'react';
import BookingForm from './BookingForm';

function Main() {
  const [date, setDate] = useState(() => new Date());
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    // Fetch available times whenever date changes
    const times = fetchAPI(date);
    setAvailableTimes(times);
  }, [date]);

  return (
    <main>
      <h1>Book a Table</h1>
      <BookingForm
        availableTimes={availableTimes}
        date={date}
        setDate={setDate}
      />
    </main>
  );
}

export default Main;