import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import TextInput from "../";

const renderInput = (props) => {
  render(<TextInput {...props} />);

  const { placeholder } = props;

  return screen.getByPlaceholderText(placeholder);
};

describe("TextInput", () => {
  it("renders a text input with placeholder text, value, attributes, and triggers on change events", () => {
    const props = {
      placeholder: "Feed me words",
      value: "things",
      onChange: jest.fn(),
      extraAttrs: { "aria-label": "Type search term" },
    };

    const found = renderInput(props);
    const {
      placeholder,
      value,
      onChange,
      extraAttrs: { ariaLabel },
    } = props;

    expect(found).toHaveAttribute("type", "text");
    expect(found).toHaveAttribute("placeholder", placeholder);
    expect(found).toHaveAttribute("aria-label", ariaLabel);
    expect(found).toHaveValue(value);

    fireEvent.change(found, { target: { value: "a" } });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
