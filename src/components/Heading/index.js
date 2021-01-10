import PropTypes from "prop-types";

const Heading = (props) => {
  const { level, display, extraAttrs = {} } = props;
  const HeadingTag = `h${level}`;

  return <HeadingTag {...extraAttrs}>{display}</HeadingTag>;
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  display: PropTypes.node,
  extraAttrs: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.instanceOf(undefined),
  ]),
};

export default Heading;
