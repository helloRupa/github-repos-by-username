const ReposFound = (props) => {
  const {
    data: {
      repositories: { totalCount },
    },
  } = props;

  return <span className="repo-number">{totalCount} repos found</span>;
};

export default ReposFound;
