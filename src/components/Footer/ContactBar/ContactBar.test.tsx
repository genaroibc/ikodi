import { render, screen } from "@testing-library/react";
import { ContactItem } from "components/ContactItem/ContactItem";
import { ContactBar } from "./ContactBar";

describe("ContactBar", () => {
  it("renders correctly", () => {
    const mockItems: Array<ContactItem> = [
      {
        iconSrc: "/svg/github.svg",
        title: "github",
        href: "https://github.com/GenaroIBC"
      },
      {
        iconSrc: "/svg/linkedin.svg",
        title: "linkedin",
        href: "https://www.linkedin.com/in/genaro-bonavita-170742231/"
      }
    ];

    render(<ContactBar items={mockItems} />);

    mockItems.forEach(item => {
      const contactIcon = screen.getByAltText(item.title);

      expect(contactIcon).toBeInTheDocument();
      expect(contactIcon).toHaveAttribute("src", item.iconSrc);
    });
  });
});
