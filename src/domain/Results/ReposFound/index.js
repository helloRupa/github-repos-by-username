import PropTypes from "prop-types";

const ReposFound = (props) => {
  const {
    data: {
      repositories: { totalCount },
    },
  } = props;

  return <span className="repo-number">{totalCount} repos found</span>;
};

ReposFound.propTypes = {
  data: PropTypes.object,
};

export default ReposFound;
