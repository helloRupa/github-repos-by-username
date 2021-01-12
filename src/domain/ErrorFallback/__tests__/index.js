import { cleanup, render } from "@testing-library/react";
import ErrorFallback from "../";

describe("ErrorFallback", () => {
  it("renders the error and provides a button to recover somehow", () => {
    const errorText = "This is so awful.";
    let { container } = render(<ErrorFallback error={errorText} />);
    let found = container.textContent.indexOf(errorText);
    const button = container.querySelector("button");

    expect(found).not.toBe(-1);
    expect(button).toBeInTheDocument();

    cleanup();

    const actualError = Error(errorText);
    container = render(<ErrorFallback error={actualError} />).container;
    found = container.textContent.indexOf(errorText);

    expect(found).not.toBe(-1);
  });
});
