import Heading from "../../../components/Heading";
import LinkNewTab from "../../../components/LinkNewTab";

const SectionHeading = (props) => {
  const { repositoryOwner, sectionId } = props;

  const buildHeading = () => {
    const { login, url } = repositoryOwner;

    return (
      <>
        Search Results for:{" "}
        <LinkNewTab
          href={url}
          display={login}
          extraAttrs={{
            "aria-label": "Open user's GitHub profile in a new tab.",
          }}
        />
      </>
    );
  };

  const setHeadingText = () =>
    repositoryOwner ? buildHeading() : "No results found";

  return (
    <Heading
      level={2}
      display={setHeadingText()}
      extraAttrs={{ id: sectionId }}
    />
  );
};

export default SectionHeading;
