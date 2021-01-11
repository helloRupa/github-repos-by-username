import spinner from "../assets/spinner.gif";

const Loading = () => {
  return (
    <div>
      <img src={spinner} alt="Fetching results" />
    </div>
  );
};

export default Loading;
