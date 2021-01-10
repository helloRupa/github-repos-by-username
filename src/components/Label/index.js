import React from "react";
import PropTypes from "prop-types";

const Label = (props) => {
  const { forId, text, extraAttrs = {} } = props;

  return (
    <label htmlFor={forId} {...extraAttrs}>
      {text}
    </label>
  );
};

Label.propTypes = {
  text: PropTypes.string,
  forId: PropTypes.string,
  extraAttrs: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.instanceOf(undefined),
  ]),
};

export default Label;
