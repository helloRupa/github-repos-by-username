import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Section from "../";

describe("Section", () => {
  it("renders an accessible section element with optional attributes", () => {
    const props = {
      ariaId: "outloudable",
      children: (
        <div>
          <h3>What is this?</h3>
        </div>
      ),
      extraAttrs: {
        className: "special",
      },
    };

    const { container } = render(<Section {...props} />);
    const section = container.querySelector("section");
    const {
      ariaId,
      extraAttrs: { className },
    } = props;

    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute("aria-labelledby", ariaId);
    expect(section).toHaveClass(className);

    const h3 = section.querySelector("div h3");

    expect(h3).toBeInTheDocument();
  });
});
