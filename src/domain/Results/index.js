import Section from "../../components/Section";
import RepoList from "./RepoList";
import ReposFound from "./ReposFound";
import SectionHeading from "./SectionHeading";

const resultsSectionId = "section-heading";

const Results = (props) => {
  const {
    data,
    data: { repositoryOwner },
  } = props;

  const showData = repositoryOwner && repositoryOwner.login;

  return (
    <Section ariaId={resultsSectionId}>
      <SectionHeading
        repositoryOwner={repositoryOwner}
        sectionId={resultsSectionId}
      />

      {showData && <ReposFound data={repositoryOwner} />}
      {showData && <RepoList data={data} />}
    </Section>
  );
};

export default Results;
