import { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_MORE_REPOS } from "../utils/queries";
import { APOLLO_REQUEST_CONFIG } from "../../constants/app";
import { isValidSearchTerm } from "../utils/input_validity";
import SearchBar from "../SearchBar";
import Results from "../Results";
import Loading from "./Loading";
import RequestError from "../RequestError";
import LoadMore from "../LoadMore";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hasMore, setHasMore] = useState(false);
  const [endCursor, setEndCursor] = useState(false);
  const [results, setResults] = useState(null);
  const [getUserRepos, { error, data, loading, fetchMore }] = useLazyQuery(
    GET_MORE_REPOS,
    APOLLO_REQUEST_CONFIG
  );

  useEffect(() => {
    if (data) {
      setResults(data);
    }
  }, [data]);

  useEffect(() => {
    const { endCursor, hasNextPage } = results?.repositoryOwner?.repositories
      ?.pageInfo || { endCursor: null, hasNextPage: false };

    setHasMore(hasNextPage);
    setEndCursor(endCursor);
  }, [results]);

  // We shouldn't make a new request if the term is exactly the same
  const getRepos = (input) => {
    if (isValidSearchTerm(input) && input !== searchTerm) {
      setSearchTerm(input);
      getUserRepos({ variables: { username: input } });
    }
  };

  const getMoreRepos = () => {
    if (endCursor && hasMore) {
      fetchMore({ variables: { username: searchTerm, endCursor } });
    }
  };

  return (
    <main aria-live="polite" aria-busy={loading}>
      <SearchBar getRepos={getRepos} />
      {error && <RequestError errorData={error} />}
      {results && <Results data={results} />}
      {!error && loading && <Loading />}
      {hasMore && !loading && <LoadMore handleClick={getMoreRepos} />}
    </main>
  );
};

export default SearchPage;
