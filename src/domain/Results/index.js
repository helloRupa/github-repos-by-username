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

  return (
    <Section ariaId={resultsSectionId}>
      <SectionHeading
        repositoryOwner={repositoryOwner}
        sectionId={resultsSectionId}
      />

      {repositoryOwner && <ReposFound data={repositoryOwner} />}
      {repositoryOwner && <RepoList data={data} />}
    </Section>
  );
};

export default Results;
