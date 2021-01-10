import { render, screen } from "@testing-library/react";
import Heading from "../";

describe("Heading", () => {
  it("creates headings of any type with content and optional attribtues", () => {
    const props = {
      level: 3,
      display: "I'm of middle importance",
      extraAttrs: { className: "special" },
    };

    render(<Heading {...props} />);

    const {
      level,
      display,
      extraAttrs: { className },
    } = props;
    const heading = screen.getByText(display);
    const tagName = heading.tagName;

    expect(heading).toBeInTheDocument();
    expect(tagName).toBe(`H${level}`);
    expect(heading).toHaveTextContent(display);
    expect(heading).toHaveClass(className);
  });
});
