import "./styles/index.css";
import Section from "../../components/Section";
import RepoList from "./RepoList";
import ReposFound from "./ReposFound";
import SectionHeading from "./SectionHeading";

const resultsSectionId = "section-heading";

const Results = (props) => {
  if (!props.data) {
    return null;
  }

  const {
    data,
    data: { repositoryOwner },
  } = props;

  return (
    <Section
      ariaId={resultsSectionId}
      extraAttrs={{ className: "search-results" }}
    >
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
