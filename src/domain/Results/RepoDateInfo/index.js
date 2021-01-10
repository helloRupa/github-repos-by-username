import { makeDate } from "../../utils/format";

const RepoDateInfo = (props) => {
  const { createdAt, updatedAt } = props;

  return (
    <div>
      Created: {makeDate(createdAt)}, Last updated: {makeDate(updatedAt)}
    </div>
  );
};

export default RepoDateInfo;
