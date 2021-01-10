import React from "react";
import PropTypes from "prop-types";

const SubmitButton = (props) => {
  const { display, disabled = false, extraAttrs = {} } = props;

  return (
    <input type="submit" value={display} disabled={disabled} {...extraAttrs} />
  );
};

SubmitButton.propTypes = {
  display: PropTypes.node,
  disabled: PropTypes.bool,
  extraAttrs: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.instanceOf(undefined),
  ]),
};

export default SubmitButton;
