import { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_MORE_REPOS } from "../utils/queries";
import { APOLLO_REQUEST_CONFIG } from "../../constants/app";
import { isValidSearchTerm } from "../utils/input_validity";
import mergeRepoData from "../utils/merge";
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
  const [getUserRepos, { error, data, loading }] = useLazyQuery(
    GET_MORE_REPOS,
    {
      ...APOLLO_REQUEST_CONFIG,
    }
  );

  useEffect(() => {
    if (data) {
      setResults((prevState) => {
        const prevLogin = prevState?.repositoryOwner?.login;
        const currLogin = data?.repositoryOwner?.login;

        // Apollo caches data and does not return new data when the
        // same search is repeated. Set the results to data only
        // if results is not already data
        if (!prevState || prevLogin !== currLogin) {
          return data;
        }

        // We have received new data on the same user
        if (prevLogin && currLogin) {
          setResults(mergeRepoData(prevState, data));
        }
      });
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
      setResults(null);
      getUserRepos({ variables: { username: input } });
    }
  };

  const getMoreRepos = () => {
    if (endCursor && hasMore) {
      getUserRepos({ variables: { username: searchTerm, endCursor } });
    }
  };

  return (
    <main aria-live="polite" aria-busy={loading}>
      <SearchBar getRepos={getRepos} />
      {error && <RequestError errorData={error} />}
      {results && <Results data={results} />}
      {loading && <Loading />}
      {hasMore && <LoadMore handleClick={getMoreRepos} />}
    </main>
  );
};

export default SearchPage;
