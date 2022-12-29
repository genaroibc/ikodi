import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ContactItem } from "./ContactItem";

describe("ContactItem", () => {
  const mockData: ContactItem = {
    href: "https://github.com/GenaroIBC",
    name: "github",
    size: "medium"
  };

  beforeEach(() => {
    userEvent.setup();
    render(<ContactItem {...mockData} />);
  });

  it("renders link correctly", () => {
    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", mockData.href);
  });

  it("renders icon correctly", () => {
    const icon = screen.getByAltText(`${mockData.name} icon`);

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("src", `/svg/${mockData.name}.svg`);
  });
});
