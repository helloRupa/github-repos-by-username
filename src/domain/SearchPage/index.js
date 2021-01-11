import { useLazyQuery } from "@apollo/client";
import { GET_MORE_REPOS } from "../utils/queries";
import { APOLLO_REQUEST_CONFIG } from "../../constants/app";
import SearchBar from "../SearchBar";
import Results from "../Results";
import Loading from "./Loading";
import RequestError from "../RequestError";
import { isValidSearchTerm } from "../utils/input_validity";

const SearchPage = () => {
  const [getUserRepos, { error, data, loading }] = useLazyQuery(
    GET_MORE_REPOS,
    {
      ...APOLLO_REQUEST_CONFIG,
    }
  );

  const getRepos = (searchTerm) => {
    if (isValidSearchTerm(searchTerm)) {
      getUserRepos({ variables: { username: searchTerm } });
    }
  };

  return (
    <main aria-live="polite" aria-busy={loading}>
      <SearchBar getRepos={getRepos} />
      {error && <RequestError errorData={error} />}
      {loading && <Loading />}
      {data && <Results data={data} />}
    </main>
  );
};

export default SearchPage;
