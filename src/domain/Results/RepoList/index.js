import RepoListItem from "../RepoListItem";

const RepoList = (props) => {
  const {
    data: {
      repositoryOwner: {
        repositories: { nodes },
      },
    },
  } = props;

  return (
    <ul>
      {nodes.map((node) => (
        <RepoListItem key={node.createdAt} node={node} />
      ))}
    </ul>
  );
};

export default RepoList;
