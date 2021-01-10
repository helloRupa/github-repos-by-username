import { render } from "@testing-library/react";
import { APP_NAME } from "../../../constants/app";
import Header from "../";

describe("Header", () => {
  it("renders a heading with the app's name", () => {
    render(<Header />);

    const header = document.body.querySelector("header");

    expect(header).toBeInTheDocument();

    const h1 = header.querySelector("h1");

    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent(APP_NAME);
  });
});
