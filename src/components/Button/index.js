import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const { display, type, onClick, disabled = false } = props;

  return (
    <button type={type} disabled={disabled} onClick={onClick}>
      {display}
    </button>
  );
};

Button.propTypes = {
  display: PropTypes.node,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
