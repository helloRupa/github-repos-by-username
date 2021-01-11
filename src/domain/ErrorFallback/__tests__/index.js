import { render } from "@testing-library/react";
import ErrorFallback from "../";

describe("ErrorFallback", () => {
  it("renders the error and provides a button to recover somehow", () => {
    const errorText = "This is so awful.";
    const { container } = render(<ErrorFallback error={errorText} />);
    const found = container.textContent.indexOf(errorText);
    const button = container.querySelector("button");

    expect(found).not.toBe(-1);
    expect(button).toBeInTheDocument();
  });
});
