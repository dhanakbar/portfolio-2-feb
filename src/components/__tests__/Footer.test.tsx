import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  it.skip("renders correctly", () => {
    render(<Footer />);
    expect(screen.getByText(/Made with/i)).toBeInTheDocument();
    expect(screen.getByText(/Quick Links/i)).toBeInTheDocument();
  });
});
