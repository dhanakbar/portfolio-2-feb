import { render, screen } from "@testing-library/react";
import Testimonials from "../Testimonials";

describe("Testimonials", () => {
  it.skip("renders correctly", () => {
    render(<Testimonials />);
    // "What People Say" is the heading
    expect(screen.getByText(/What People Say/i)).toBeInTheDocument();
    expect(screen.getByText(/Sarah Johnson/i)).toBeInTheDocument();
  });
});
