import { render, screen } from "@testing-library/react";
import Hero from "../Hero";

describe("Hero", () => {
  it.skip("renders correctly", () => {
    render(<Hero />);
    expect(screen.getByText(/Maulana Akbar Ramadhan/i)).toBeInTheDocument();
    // It appears twice, so we check if at least one exists, or use getAllByText
    expect(screen.getAllByText(/Frontend Developer/i).length).toBeGreaterThan(
      0,
    );
    expect(screen.getByText(/Get In Touch/i)).toBeInTheDocument();
  });
});
