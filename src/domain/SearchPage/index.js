import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_MORE_REPOS } from "../utils/queries";
import { APOLLO_REQUEST_CONFIG } from "../../constants/app";
import SearchBar from "../SearchBar";
import Results from "../Results";
import LoadMore from "../LoadMore";

/* TODO: ADD RESULTS, LOADING, AND ERROR */

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [getUserRepos, { error, data, loading }] = useLazyQuery(
    GET_MORE_REPOS,
    {
      ...APOLLO_REQUEST_CONFIG,
    }
  );

  const getRepos = () => {
    getUserRepos({ variables: { username: searchTerm } });
  };

  return (
    <>
      <SearchBar
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        getRepos={getRepos}
      />

      {data && <Results data={data} />}
      {data && <LoadMore data={data} handleClick={() => {}} />}
    </>
  );
};

export default SearchPage;
