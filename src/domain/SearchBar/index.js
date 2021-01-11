import { useRef, useState } from "react";
import useTextError from "../../hooks/useTextError";
import * as constants from "../../constants/app";
import Form from "../../components/Form";
import Label from "../../components/Label";
import TextInput from "../../components/TextInput";
import Buttons from "./Buttons";

const searchInputId = "search-input";

const SearchBar = (props) => {
  const { setSearchTerm, searchTerm, getRepos } = props;
  const [showInputErrors, setShowInputErrors] = useState(false);
  const searchInput = useRef();
  const regExp = new RegExp(constants.GITHUB_NAME_PATTERN);
  const isValidInput = regExp.test(searchTerm);
  const textInputError = useTextError({
    isInvalid: !isValidInput,
    element: searchInput.current,
    message: constants.SEARCH_VALIDITY_MESSAGE,
    deps: [searchTerm],
  });

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    setShowInputErrors(true);
  };

  const clearInput = () => {
    setSearchTerm("");
    setShowInputErrors(false);
  };

  const handleSubmit = (e) => {
    if (isValidInput) {
      getRepos();
      clearInput();
    }
  };

  const [minLength, maxLength] = constants.GITHUB_NAME_MIN_MAX_LENGTH;
  const extraAttrs = {
    id: searchInputId,
    ref: searchInput,
    minLength,
    maxLength,
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      extraAttrs={{ role: "search", "aria-live": "polite" }}
    >
      {showInputErrors && textInputError}
      <Label forId={searchInputId} text="Search for a User's Repos" />
      <TextInput
        placeholder="Enter GitHub username"
        onChange={handleChange}
        value={searchTerm}
        extraAttrs={extraAttrs}
      />

      <Buttons handleClear={clearInput} />
    </Form>
  );
};

export default SearchBar;
