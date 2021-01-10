import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import Button from "../index.js";

const renderButton = (props) => {
  render(<Button {...props} />);
  return screen.getByText(props.display);
};

describe("button", () => {
  afterEach(cleanup);

  it("renders a button with the given text and type and is enabled", () => {
    const props = {
      display: "Hello TDD!",
      type: "button",
    };
    const found = renderButton(props);

    expect(found).toBeInTheDocument();
    expect(found).toHaveAttribute("type", props.type);
    expect(found).not.toHaveAttribute("disabled");
  });

  it("disables the button when disabled is true", () => {
    const props = {
      display: "Unclickable",
      type: "button",
      disabled: true,
    };
    const found = renderButton(props);

    expect(found).toHaveAttribute("disabled", "");
  });

  it("calls the given callback", () => {
    const propsWithCallback = {
      display: "Click Me",
      type: "button",
      onClick: jest.fn(),
    };
    const foundWithCallback = renderButton(propsWithCallback);

    fireEvent.click(foundWithCallback);

    expect(propsWithCallback.onClick).toHaveBeenCalledTimes(1);
  });
});
