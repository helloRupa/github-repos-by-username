import React from "react";
import PropTypes from "prop-types";

const Section = (props) => {
  const { ariaId, children, extraAttrs = {} } = props;

  return (
    <section aria-labelledby={ariaId} {...extraAttrs}>
      {children}
    </section>
  );
};

Section.propTypes = {
  ariaId: PropTypes.string,
  children: PropTypes.any,
  extraAttrs: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.instanceOf(undefined),
  ]),
};

export default Section;
