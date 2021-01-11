import { render } from "@testing-library/react";
import RequestError from "../";

describe("RequestError", () => {
  it("displays the error type and its message", () => {
    const props = {
      errorData: {
        message: "Oops, something has happened",
        graphQLErrors: "something",
      },
    };

    const { container } = render(<RequestError {...props} />);
    const {
      errorData: { message },
    } = props;
    const found = container.textContent.indexOf(message);

    expect(found).not.toBe(-1);
  });
});
