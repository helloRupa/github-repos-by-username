import "./styles/index.css";
import spinner from "../assets/spinner.gif";

const Loading = () => {
  return (
    <div className="search-loading">
      <img src={spinner} alt="Fetching results" />
    </div>
  );
};

export default Loading;
