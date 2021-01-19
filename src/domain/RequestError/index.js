import PropTypes from "prop-types";

const RequestError = (props) => {
  const {
    errorData: { message, graphQLErrors },
  } = props;

  const errorType = graphQLErrors.length > 0 ? "GraphQL" : "Network Error";

  return (
    <div className="search-error">
      <h2>Request Error</h2>
      <span>Oops. Your request could not go through.</span>
      <span>
        {errorType}: {message}
      </span>
    </div>
  );
};

RequestError.propTypes = {
  errorData: PropTypes.object,
};

export default RequestError;
