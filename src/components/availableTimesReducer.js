// availableTimesReducer.js for capstone/little-lemon
export const initializeTimes = () => {
  const today = new Date();
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state, action) => {
  // Simulate API call for testing
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};
