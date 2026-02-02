import { render, screen } from "@testing-library/react";
import PortalLoader from "../PortalLoader";

describe("PortalLoader", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    window.localStorage.clear();
  });

  it.skip("renders correctly when not visited", () => {
    render(<PortalLoader />);
    // Only shows if not visited. Default state is loading=true if !visited
    // Assuming "Welcome" is text in PortalLoader
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
  });

  it.skip("does not render if already visited", () => {
    window.localStorage.setItem("hasVisitedPortfolio", "true");
    const { container } = render(<PortalLoader />);
    expect(container).toBeEmptyDOMElement();
  });
});
