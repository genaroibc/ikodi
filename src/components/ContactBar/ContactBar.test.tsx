import { render, screen } from "@testing-library/react";
import { ContactItem } from "components/ContactBar/ContactItem/ContactItem";
import { ContactBar } from "./ContactBar";

describe("ContactBar", () => {
  it("renders correctly", () => {
    const mockItems: Array<ContactItem> = [
      {
        href: "https://github.com/GenaroIBC",
        name: "github",
        size: "medium"
      },
      {
        href: "https://www.linkedin.com/in/genaro-bonavita-170742231/",
        name: "linkedin",
        size: "medium"
      }
    ];

    render(<ContactBar items={mockItems} />);

    mockItems.forEach(item => {
      const contactIcon = screen.getByAltText(`${item.name} icon`);

      expect(contactIcon).toBeInTheDocument();
      expect(contactIcon).toHaveAttribute("src", `/svg/${item.name}.svg`);
    });
  });
});
