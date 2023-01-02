import { render, screen } from "@testing-library/react";
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
});
