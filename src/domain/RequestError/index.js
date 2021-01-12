import PropTypes from "prop-types";

const RequestError = (props) => {
  const {
    errorData: { message, graphQLErrors },
  } = props;

  const errorType = graphQLErrors ? "GraphQL" : "Network Error";

  return (
    <div className="search-error">
      <span>Oops. Your request could could not go through.</span>
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
