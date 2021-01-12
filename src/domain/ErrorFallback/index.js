import "./styles/index.css";
import PropTypes from "prop-types";
import Button from "../../components/Button";

const ErrorFallback = (props) => {
  const { error } = props;

  const handleClick = () => {
    window.location.reload();
  };

  const message = error?.message || error;

  return (
    <div role="alert" className="major-error">
      <h2>Something has gone horribly wrong:</h2>
      <p>Error: {message}</p>
      <p>You might want to refresh the page or do something else.</p>
      <Button type="button" display="Refresh Page" onClick={handleClick} />
    </div>
  );
};

ErrorFallback.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Error)]),
};

export default ErrorFallback;
