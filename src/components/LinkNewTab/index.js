import React from "react";
import PropTypes from "prop-types";

const LinkNewTab = (props) => {
  const { href, display, extraAttrs = {} } = props;
  return (
    <a
      href={href}
      rel="noopener noreferrer nofollow"
      target="_blank"
      {...extraAttrs}
    >
      {display}
    </a>
  );
};

LinkNewTab.propTypes = {
  href: PropTypes.string,
  display: PropTypes.node,
  extraAttrs: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.instanceOf(undefined),
  ]),
};

export default LinkNewTab;
