import { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_MORE_REPOS } from "../utils/queries";
import { APOLLO_REQUEST_CONFIG } from "../../constants/app";
import { isValidSearchTerm } from "../utils/input_validity";
import SearchBar from "../SearchBar";
import Results from "../Results";
import Loading from "./Loading";
import RequestError from "../RequestError";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [getUserRepos, { error, data, loading }] = useLazyQuery(
    GET_MORE_REPOS,
    {
      ...APOLLO_REQUEST_CONFIG,
    }
  );

  useEffect(() => {
    if (isValidSearchTerm(searchTerm)) {
      getUserRepos({ variables: { username: searchTerm } });
    }
  }, [searchTerm, getUserRepos]);

  return (
    <main aria-live="polite" aria-busy={loading}>
      <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      {error && <RequestError errorData={error} />}
      {loading && !data && <Loading />}
      {data && !loading && <Results data={data} />}
    </main>
  );
};

export default SearchPage;
