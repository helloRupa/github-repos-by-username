import RepoHeading from "../RepoHeading";
import RepoDateInfo from "../RepoDateInfo";
import RepoDescription from "../RepoDescription";

const RepoListItem = (props) => {
  const {
    node: {
      url,
      name,
      forkCount,
      stargazerCount,
      createdAt,
      updatedAt,
      description,
    },
  } = props;

  return (
    <li>
      <RepoHeading
        url={url}
        name={name}
        forkCount={forkCount}
        stargazerCount={stargazerCount}
      />

      <RepoDateInfo createdAt={createdAt} updatedAt={updatedAt} />
      <RepoDescription description={description} />
    </li>
  );
};

export default RepoListItem;
