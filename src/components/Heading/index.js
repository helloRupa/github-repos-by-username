import React from "react";
import PropTypes from "prop-types";

const Heading = (props) => {
  const { level, text, extraAttrs = {} } = props;
  const HeadingTag = `h${level}`;

  return <HeadingTag {...extraAttrs}>{text}</HeadingTag>;
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  text: PropTypes.string,
  extraAttrs: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.instanceOf(undefined),
  ]),
};

export default Heading;
