const ErrorFallback = ({ error }) => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div role="alert">
      <p>Something has gone horribly wrong:</p>
      <pre>Error: {error.message}</pre>
      <p>You might want to refresh the page or do something else.</p>
      <button onClick={handleClick}>Refresh Page</button>
    </div>
  );
};

export default ErrorFallback;
