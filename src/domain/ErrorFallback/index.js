import "./styles/index.css";
import Button from "../../components/Button";

const ErrorFallback = ({ error }) => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div role="alert" className="major-error">
      <p>Something has gone horribly wrong:</p>
      <pre>Error: {error}</pre>
      <p>You might want to refresh the page or do something else.</p>
      <Button type="button" display="Refresh Page" onClick={handleClick} />
    </div>
  );
};

export default ErrorFallback;
