const mergeRepoData = (prev, curr) => ({
  repositoryOwner: {
    ...prev.repositoryOwner,
    repositories: {
      ...curr.repositoryOwner.repositories,
      nodes: [
        ...prev.repositoryOwner.repositories.nodes,
        ...curr.repositoryOwner.repositories.nodes,
      ],
    },
  },
});

export default mergeRepoData;
