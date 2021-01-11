import Heading from "../../../components/Heading";
import LinkNewTab from "../../../components/LinkNewTab";
import RepoData from "../RepoData";

const RepoHeading = (props) => {
  const { url, name, forkCount, stargazerCount } = props;

  return (
    <div className="repo-heading">
      <Heading
        level={3}
        display={
          <LinkNewTab
            href={url}
            display={name}
            extraAttrs={{ "aria-label": "Open repo in new tab.}" }}
          />
        }
      />
      <RepoData forkCount={forkCount} stargazerCount={stargazerCount} />
    </div>
  );
};

export default RepoHeading;
