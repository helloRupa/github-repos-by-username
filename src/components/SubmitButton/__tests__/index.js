import React from "react";
import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import SubmitButton from "../";

const renderButton = (props) => {
  render(<SubmitButton {...props} />);

  return screen.getByText(props.display);
};

describe("SubmitButton", () => {
  afterEach(cleanup);

  it("renders a submit button with the given text, attributes, type submit, and is enabled", () => {
    const props = {
      display: "Submit Form",
      extraAttrs: { "aria-label": "Click to search" },
    };
    const found = renderButton(props);
    const {
      extraAttrs: { ariaLabel },
    } = props;

    expect(found).toBeInTheDocument();
    expect(found).toHaveAttribute("type", "submit");
    expect(found).toHaveAttribute("aria-label", ariaLabel);
    expect(found).not.toHaveAttribute("disabled");
  });

  it("disables the button when disabled is true", () => {
    const props = {
      display: "Unclickable",
      disabled: true,
    };
    const found = renderButton(props);

    expect(found).toHaveAttribute("disabled", "");
  });
});
