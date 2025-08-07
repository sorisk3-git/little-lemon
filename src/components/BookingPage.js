import React, { useState } from "react";
import BookingPage from "./BookingPage";

const Main = () => {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
  ]);

  return (
    <BookingPage
      availableTimes={availableTimes}
      setAvailableTimes={setAvailableTimes}
    />
  );
};

export default Main;