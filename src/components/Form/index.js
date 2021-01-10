import PropTypes from "prop-types";

const Form = (props) => {
  const { children, handleSubmit, extraAttrs = {} } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
  };

  return (
    <form onSubmit={onSubmit} {...extraAttrs}>
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node,
  handleSubmit: PropTypes.func,
  extraAttrs: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.instanceOf(undefined),
  ]),
};

export default Form;
