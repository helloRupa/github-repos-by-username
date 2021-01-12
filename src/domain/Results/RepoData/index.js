import PropTypes from "prop-types";

const RepoData = (props) => {
  const { forkCount, stargazerCount } = props;

  return (
    <span>
      {stargazerCount} Stars | {forkCount} Forks
    </span>
  );
};

RepoData.propTypes = {
  forkCount: PropTypes.number,
  stargazerCount: PropTypes.number,
};

export default RepoData;
