import { useEffect, useState } from "react";
import "./styles/index.css";
import PropTypes from "prop-types";
import lightOn from "./assets/lightOn.svg";
import lightOff from "./assets/lightOff.svg";
import Button from "../Button";
import Label from "../Label";

const DarkModeSwitch = (props) => {
  const {
    classNames: { dark, light },
  } = props;
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.remove(light);
      document.body.classList.add(dark);
    } else {
      document.body.classList.remove(dark);
      document.body.classList.add(light);
    }
  }, [dark, light, isDark]);

  const handleClick = () => {
    setIsDark(!isDark);
  };

  const image = isDark ? lightOn : lightOff;
  const onOrOff = isDark ? "On" : "Off";
  const toggleId = "dark-mode-toggle";

  return (
    <div className="dark-mode-switch">
      <Label text={`Dark Mode is: ${onOrOff}`} forId={toggleId} />
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
