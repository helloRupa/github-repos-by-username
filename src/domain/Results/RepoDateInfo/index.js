import PropTypes from "prop-types";
import { makeDate } from "../../utils/format";

const RepoDateInfo = (props) => {
  const { createdAt, updatedAt } = props;

  return (
    <span className="repo-date">
      Created: {makeDate(createdAt)}, Last updated: {makeDate(updatedAt)}
    </span>
  );
};

RepoDateInfo.propTypes = {
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
};

export default RepoDateInfo;
