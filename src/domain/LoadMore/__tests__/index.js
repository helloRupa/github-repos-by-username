import { render, fireEvent } from "@testing-library/react";
import LoadMore from "../";

const renderButton = (props) => {
  render(<LoadMore {...props} />);

  return document.querySelector("button");
};

describe("Button", () => {
  it("calls the callback when clicked", () => {
    const props = {
      handleClick: jest.fn(),
    };
    const found = renderButton(props);

    expect(found).toBeInTheDocument();

    fireEvent.click(found);

    expect(props.handleClick).toHaveBeenCalledTimes(1);
  });
});
