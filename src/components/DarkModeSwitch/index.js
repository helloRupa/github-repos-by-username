import { useEffect, useState } from "react";
import "./styles/index.css";
import PropTypes from "prop-types";
import lightOn from "./assets/lightOn.svg";
import lightOff from "./assets/lightOff.svg";
import Button from "../Button";
import Label from "../Label";

const storageKey = "chosenTheme";

const DarkModeSwitch = (props) => {
  const {
    classNames: { dark, light },
  } = props;
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedData = window.localStorage.getItem(storageKey);

    if (storedData !== null && [dark, light].includes(storedData)) {
      setIsDark(storedData === dark);
    }
  }, [dark, light]);

  useEffect(() => {
    const updateTheme = (removeClass, addClass) => {
      document.body.classList.remove(removeClass);
      document.body.classList.add(addClass);
      window.localStorage.setItem(storageKey, addClass);
    };

    if (isDark) {
      updateTheme(light, dark);
    } else {
      updateTheme(dark, light);
    }
  }, [dark, light, isDark]);

  const handleClick = () => {
    setIsDark(!isDark);
  };

  const image = isDark ? lightOn : lightOff;
  const toggleId = "dark-mode-toggle";

  return (
    <div className="dark-mode-switch">
      <Label text={`Dark Mode: ${isDark ? "On" : "Off"}`} forId={toggleId} />
      <Button
        type="button"
        display={<img src={image} alt={`Click to turn Dark Mode ${!isDark}`} />}
        onClick={handleClick}
        extraAttrs={{ id: toggleId }}
      />
    </div>
  );
};

DarkModeSwitch.propTypes = {
  classNames: PropTypes.object,
};

export default DarkModeSwitch;
