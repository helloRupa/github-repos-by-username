import { render, fireEvent } from "@testing-library/react";
import { LocalStorageMock } from "@react-mock/localstorage";
import DarkModeSwitch from "../";

describe("DarkModeSwitch", () => {
  it("sets the theme correctly and saves it", () => {
    const props = {
      classNames: {
        light: "soLight",
        dark: "veryDark",
      },
    };

    const { container } = render(
      <LocalStorageMock>
        <DarkModeSwitch {...props} />
      </LocalStorageMock>
    );
    const button = container.querySelector("button");
    const label = container.querySelector("label");
    const {
      classNames: { light, dark },
    } = props;

    document.body.className = light;

    let currentTheme = document.body.className;

    expect(button).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(currentTheme).toBe(light);

    fireEvent.click(button);
    currentTheme = document.body.className;

    expect(currentTheme).toBe(dark);
    expect(localStorage.getItem("chosenTheme")).toBe(dark);

    fireEvent.click(label);
    currentTheme = document.body.className;

    expect(currentTheme).toBe(light);
    expect(localStorage.getItem("chosenTheme")).toBe(light);
  });
});
