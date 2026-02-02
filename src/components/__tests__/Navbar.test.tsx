import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";

describe("Navbar", () => {
  it.skip("renders correctly", () => {
    render(<Navbar />);
    expect(screen.getByText(/Maulana/i)).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Let's Talk/i)).toBeInTheDocument();
  });
});
