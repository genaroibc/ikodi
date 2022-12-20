import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders correctly", () => {
    render(<Hero />);

    const title = screen.getByText(/ikodi/i);
    expect(title).toBeInTheDocument();

    const author = screen.getByText(/genaro bonavita/i);
    expect(author).toBeInTheDocument();
  });
});
