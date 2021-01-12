import PropTypes from "prop-types";

const RepoDescription = (props) => {
  const { description } = props;

  return <p className="repo-description">{description}</p>;
};

RepoDescription.propTypes = {
  description: PropTypes.string,
};

export default RepoDescription;
