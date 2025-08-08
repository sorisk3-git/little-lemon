import { render, screen } from "@testing-library/react";
import BookingForm from "../BookingForm";

const mockSetDate = jest.fn();

test("date input has type=date", () => {
  render(
    <BookingForm availableTimes={["18:00"]} date={new Date()} setDate={mockSetDate} />
  );
  const dateInput = screen.getByLabelText(/date/i);
  expect(dateInput).toHaveAttribute("type", "date");
});

test("guests input has type=number, min=1, max=10", () => {
  render(
    <BookingForm availableTimes={["18:00"]} date={new Date()} setDate={mockSetDate} />
  );
  const guestsInput = screen.getByLabelText(/number of guests/i);
  expect(guestsInput).toHaveAttribute("type", "number");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});

test("occasion select exists", () => {
  render(
    <BookingForm availableTimes={["18:00"]} date={new Date()} setDate={mockSetDate} />
  );
  const occasionSelect = screen.getByLabelText(/occasion/i);
  expect(occasionSelect).toBeInTheDocument();
});
