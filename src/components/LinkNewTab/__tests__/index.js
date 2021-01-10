import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LinkNewTab from "../";

describe("LinkNewTab", () => {
  it("renders a link that opens in a new tab when clicked and allows for optional attributes", () => {
    const props = {
      href: "http://www.cats.com",
      display: "Go to the cats",
      extraAttrs: { className: "cats" },
    };

    render(<LinkNewTab {...props} />);

    const {
      href,
      display,
      extraAttrs: { className },
    } = props;
    const link = screen.getByText(display);

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", href);
    expect(link).toHaveClass(className);
    expect(link).toHaveAttribute("target", "_blank");

    const refValues = link.rel.split(" ").sort();

    expect(refValues).toEqual(["noopener", "noreferrer", "nofollow"].sort());
  });
});
