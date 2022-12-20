import { fireEvent, render, screen } from "@testing-library/react";
import { Tooltip } from "./Tooltip";

describe("Tooltip", () => {
  it("renders its childen", () => {
    render(
      <Tooltip items={[]}>
        <span>My span</span>
      </Tooltip>
    );

    const tooltipContainer = screen.getByText("My span");

    expect(tooltipContainer).toBeInTheDocument();
  });

  // it("shows tooltip when hovering", () => {
  //   const mockItems = [
  //     {
  //       href: "https://github.com/GenaroIBC",
  //       iconSrc: "/svg/github.svg",
  //       title: "github"
  //     }
  //   ];

  //   render(
  //     <Tooltip items={mockItems}>
  //       <span>Hover me</span>
  //     </Tooltip>
  //   );

  //   const tooltipContainer = screen.getByText("Hover me");

  //   const tooltip = screen.getByAltText("github");

  //   fireEvent.mouseOver(tooltipContainer);

  //   expect(tooltip).toBeVisible();
  // });
});
