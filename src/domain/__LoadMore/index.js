import Button from "../../components/Button";

const LoadMore = (props) => {
  const {
    handleClick,
    data: { repositoryOwner },
  } = props;

  if (!repositoryOwner) {
    return null;
  }

  const {
    repositories: { totalCount },
  } = repositoryOwner;

  if (totalCount === 0) {
    return null;
  }

  return (
    <Button
      display="Load More"
      type="button"
      onClick={handleClick}
      extraAttrs={{ "aria-label": "Load more repos" }}
    />
  );
};

export default LoadMore;
