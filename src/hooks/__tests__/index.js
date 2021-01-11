import { render, cleanup } from "@testing-library/react";
import useInputTextError from "../useInputTextError";

const HookContainer = (props) => {
  const { element } = props;
  const error = useInputTextError({ ...props, element });

  return <div>{error}</div>;
};

const input = {
  setAttribute(key, value) {
    return { [key]: value };
  },
};

describe("useInputTextError", () => {
  it("returns a component with an error message and invalidates the supplied element", () => {
    const props = {
      isInvalid: false,
      message: "Something is wrong with this",
      deps: [1],
      element: input,
    };

    let spy = jest.spyOn(input, "setAttribute");
    let { container } = render(<HookContainer {...props} />);
    let { message } = props;
    let foundError = container.textContent.indexOf(message);

    expect(spy).toHaveBeenCalledWith("aria-invalid", false);
    expect(foundError).toBe(-1);

    cleanup();
    spy.mockRestore();
    props.isInvalid = true;
    spy = jest.spyOn(input, "setAttribute");
    container = render(<HookContainer {...props} />).container;
    foundError = container.textContent.indexOf(message);

    expect(spy).toHaveBeenCalledWith("aria-invalid", true);
    expect(foundError).not.toBe(-1);
  });
});
