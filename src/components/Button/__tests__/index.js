import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import Button from "../";

const renderButton = (props) => {
  render(<Button {...props} />);

  return screen.getByText(props.display);
};

describe("Button", () => {
  afterEach(cleanup);

  it("renders a button with the given text and type, and calls the callback", () => {
    const props = {
      display: "Hello TDD!",
      type: "button",
      onClick: jest.fn(),
    };
    const found = renderButton(props);

    expect(found).toBeInTheDocument();
    expect(found).toHaveAttribute("type", props.type);

    fireEvent.click(found);

    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it("optionally disables the button and adds extra attributes", () => {
    const props = {
      display: "Unclickable",
      type: "button",
      disabled: true,
      extraAttrs: { "aria-label": "This is accessible" },
    };
    const found = renderButton(props);
    const {
      extraAttrs: { ariaLabel },
    } = props;

    expect(found).toHaveAttribute("disabled", "");
    expect(found).toHaveAttribute("aria-label", ariaLabel);
  });
});
