import { render, screen } from "@testing-library/react";
import Journey from "../Journey";

describe("Journey", () => {
  it.skip("renders correctly", () => {
    render(<Journey />);
    expect(screen.getByText(/My Journey/i)).toBeInTheDocument();
    expect(screen.getByText(/Experiences/i)).toBeInTheDocument(); // "timeline of my professional experiences" contains "experiences"
  });
});
