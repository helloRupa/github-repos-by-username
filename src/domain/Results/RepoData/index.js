const RepoData = (props) => {
  const { forkCount, stargazerCount } = props;

  return (
    <div>
      {stargazerCount} Stars | {forkCount} Forks
    </div>
  );
};

export default RepoData;
