import { render, screen } from "@testing-library/react";
import Heading from "../";

describe("Heading", () => {
  it("creates headings of any type with content and optional attribtues", () => {
    const props = {
      level: 3,
      text: "I'm of middle importance",
      extraAttrs: { className: "special" },
    };

    render(<Heading {...props} />);

    const {
      level,
      text,
      extraAttrs: { className },
    } = props;
    const heading = screen.getByText(text);
    const tagName = heading.tagName;

    expect(heading).toBeInTheDocument();
    expect(tagName).toBe(`H${level}`);
    expect(heading).toHaveTextContent(text);
    expect(heading).toHaveClass(className);
  });
});
