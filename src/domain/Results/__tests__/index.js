import { render, screen, cleanup } from "@testing-library/react";
import noRepos from "./no_repos";
import repos from "./repos";
import noUser from "./no_user";
import Results from "../";

describe("Results", () => {
  afterEach(cleanup);

  it("renders a list of repos when they exist", () => {
    const { data } = repos;
    const { container } = render(<Results data={data} />);
    const {
      repositoryOwner: {
        repositories: { nodes, totalCount },
        login,
      },
    } = data;
    const found = container.querySelector("section");
    const listItems = container.querySelectorAll("li");

    expect(found).toBeInTheDocument();
    expect(listItems).toHaveLength(nodes.length);
    expect(listItems[1]).toHaveTextContent(nodes[1].name);
    expect(container).toHaveTextContent(login);
    expect(container).toHaveTextContent(totalCount);
  });

  it("can handle empty repos", () => {
    const { data } = noRepos;
    const {
      repositoryOwner: { login },
    } = data;

    render(<Results data={data} />);
    const found = screen.getByText(login);

    expect(found).toBeInTheDocument();
  });

  it("can handle no user", () => {
    const { data } = noUser;
    const { container } = render(<Results data={data} />);
    const found = container.querySelector("section");

    expect(found).toBeInTheDocument();
  });
});
