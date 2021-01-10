import { render, fireEvent, screen } from "@testing-library/react";
import Form from "../";

describe("Form", () => {
  it("displays fields and does not refresh on submit", () => {
    const props = {
      children: <input type="submit" value="submit" />,
      extraAttrs: { className: "formy-form" },
      handleSubmit: jest.fn(),
    };

    const { container } = render(<Form {...props} />);
    const form = container.querySelector("form");
    const submitButton = screen.getByText("submit");
    const {
      handleSubmit,
      extraAttrs: { className },
    } = props;

    expect(form).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(form).toHaveClass(className);

    const extraText = "I'll be gone if there's a refresh";

    document.body.append(extraText);

    expect(() => fireEvent.click(submitButton)).not.toThrowError();
    expect(handleSubmit).toBeCalledTimes(1);

    const target = handleSubmit.mock.calls[0][0].target;

    expect(target).toBe(form);
  });
});
