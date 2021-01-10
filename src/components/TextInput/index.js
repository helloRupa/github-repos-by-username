import PropTypes from "prop-types";

const TextInput = (props) => {
  const { placeholder, value, onChange, extraAttrs = {} } = props;

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...extraAttrs}
    />
  );
};

TextInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  extraAttrs: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.instanceOf(undefined),
  ]),
};

export default TextInput;
