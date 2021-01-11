const RequestError = (props) => {
  const {
    errorData: { message, graphQLErrors },
  } = props;

  const errorType = graphQLErrors ? "GraphQL" : "Network Error";

  return (
    <div>
      <span>Oops. Your request good could not go through.</span>
      <span>
        {errorType}: {message}
      </span>
    </div>
  );
};

export default RequestError;
