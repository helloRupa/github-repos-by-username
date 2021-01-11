import { render, fireEvent, cleanup } from "@testing-library/react";
import SearchBar from "../";

describe("SearchBar", () => {
  afterEach(cleanup);

  it("let's users type a search term and search for it", () => {
    const props = {
      getRepos: jest.fn(),
    };

    render(<SearchBar {...props} />);

    const input = document.querySelector("input[type='text']");
    const submit = document.querySelector("input[type='submit']");
    const clear = document.querySelector("[type='reset']");
    const value = "hamtaro";
    const { getRepos } = props;

    fireEvent.change(input, { target: { value } });

    expect(input).toHaveValue(value);

    fireEvent.click(submit);

    expect(getRepos).toHaveBeenLastCalledWith(value);

    fireEvent.click(clear);

    expect(input).toHaveValue("");
  });

  it("displays an error when the term is invalid", () => {
    const props = {
      getRepos: jest.fn(),
    };

    render(<SearchBar {...props} />);

    const input = document.querySelector("input[type='text']");
    const value = "--";

    fireEvent.change(input, { target: { value } });

    const error = document.querySelector(".input-error");

    expect(error).toBeInTheDocument();
  });
});
