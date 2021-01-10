const ReposFound = (props) => {
  const {
    data: {
      repositories: { totalCount },
    },
  } = props;

  return <div>{totalCount} repos found</div>;
};

export default ReposFound;
