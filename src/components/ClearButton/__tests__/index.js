import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import ClearButton from "../";

const renderButton = (props) => {
  render(<ClearButton {...props} />);

  return screen.getByText("Clear");
};

describe("ClearButton", () => {
  afterEach(cleanup);

  it("renders a Clear button that clears a form when clicked and calls a callback", () => {
    const props = {
      onClick: jest.fn(),
    };
    const found = renderButton(props);

    expect(found).toBeInTheDocument();
    expect(found).toHaveAttribute("type", "reset");

    fireEvent.click(found);

    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it("optionally disables and allows extra attributes", () => {
    const props = {
      disabled: true,
      extraAttrs: { "aria-label": "Clear the form" },
    };
    const found = renderButton(props);
    const {
      extraAttrs: { ariaLabel },
    } = props;

    expect(found).toHaveAttribute("disabled", "");
    expect(found).toHaveAttribute("aria-label", ariaLabel);
  });
});
