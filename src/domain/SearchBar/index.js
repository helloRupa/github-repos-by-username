import PropTypes from "prop-types";
import { useRef, useState } from "react";
import useInputTextError from "../../hooks/useInputTextError";
import { isValidSearchTerm } from "../utils/input_validity";
import * as constants from "../../constants/app";
import Form from "../../components/Form";
import Label from "../../components/Label";
import TextInput from "../../components/TextInput";
import Buttons from "./Buttons";

const searchInputId = "search-input";

const SearchBar = (props) => {
  const { getRepos } = props;
  const [inputText, setInputText] = useState("");
  const [showInputErrors, setShowInputErrors] = useState(false);

  const searchInput = useRef();
  const textInputError = useInputTextError({
    isInvalid: !isValidSearchTerm(inputText),
    element: searchInput.current,
    message: constants.SEARCH_VALIDITY_MESSAGE,
  });

  const handleChange = (e) => {
    setInputText(e.target.value);
    setShowInputErrors(true);
  };

  const clearInput = () => {
    setInputText("");
    setShowInputErrors(false);
  };

  const handleSubmit = (e) => {
    getRepos(inputText);
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
      extraAttrs={{
        role: "search",
        "aria-live": "polite",
        className: "search-form",
      }}
    >
      {showInputErrors && textInputError}
      <Label forId={searchInputId} text="Search for a User's Repos" />
      <TextInput
        placeholder="Enter GitHub username"
        onChange={handleChange}
        value={inputText}
        extraAttrs={extraAttrs}
      />

      <Buttons handleClear={clearInput} />
    </Form>
  );
};

SearchBar.propTypes = {
  getRepos: PropTypes.func,
};

export default SearchBar;
