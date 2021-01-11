const RepoData = (props) => {
  const { forkCount, stargazerCount } = props;

  return (
    <span>
      {stargazerCount} Stars | {forkCount} Forks
    </span>
  );
};

export default RepoData;
