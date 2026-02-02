import { render, screen } from "@testing-library/react";

function Simple() {
  return <div>Simple</div>;
}

test.skip("Simple", () => {
  render(<Simple />);
  expect(screen.getByText("Simple")).toBeInTheDocument();
});
