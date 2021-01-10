import { useState } from "react";
import SearchBar from "../SearchBar";
import Results from "../Results";

/* TODO: ADD RESULTS, LOADING, AND ERROR */

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [response, setResponse] = useState({
    loading: false,
    error: undefined,
    data: undefined,
  });
  const { loading, error, data } = response;

  return (
    <>
      <SearchBar
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        setResponse={setResponse}
      />

      {data && <Results data={response.data} />}
    </>
  );
};

export default SearchPage;
