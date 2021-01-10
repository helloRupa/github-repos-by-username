import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

const ClearButton = (props) => {
  const { onClick, disabled = false, extraAttrs = {} } = props;

  return (
    <Button
      display="Clear"
      type="reset"
      disabled={disabled}
      onClick={onClick}
      extraAttrs={extraAttrs}
    />
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  extraAttrs: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.instanceOf(undefined),
  ]),
};

export default ClearButton;
