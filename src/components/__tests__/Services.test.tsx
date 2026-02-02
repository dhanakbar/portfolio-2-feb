import { render, screen } from "@testing-library/react";
import Services from "../Services";

describe("Services", () => {
  it.skip("renders correctly", () => {
    render(<Services />);
    expect(screen.getByText(/My Services/i)).toBeInTheDocument();
    expect(screen.getByText(/Frontend Development/i)).toBeInTheDocument();
  });
});
