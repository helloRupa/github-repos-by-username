import { render, screen } from "@testing-library/react";
import Label from "../";

describe("Label", () => {
  it("displays descriptive text, refers to another element, and allows extra attributes", () => {
    const props = {
      text: "I create understanding",
      forId: "accessible-times",
      extraAttrs: { "aria-labelledby": "Being extra" },
    };
    const {
      text,
      forId,
      extraAttrs: { ariaLabelledby },
    } = props;

    render(<Label {...props} />);

    const label = screen.getByText(text);

    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(text);
    expect(label).toHaveAttribute("for", forId);
    expect(label).toHaveAttribute("aria-labelledby", ariaLabelledby);
  });
});
