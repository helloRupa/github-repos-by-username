import { useRef, useState } from "react";
import "./styles/index.css";
import useInputTextError from "../../hooks/useInputTextError";
import { isValidSearchTerm } from "../utils/input_validity";
import * as constants from "../../constants/app";
import Form from "../../components/Form";
import Label from "../../components/Label";
import TextInput from "../../components/TextInput";
import Buttons from "./Buttons";

const searchInputId = "search-input";

const SearchBar = (props) => {
  const { setSearchTerm, searchTerm } = props;
  const [inputText, setInputText] = useState(searchTerm);
  const [showInputErrors, setShowInputErrors] = useState(false);
  const searchInput = useRef();
  const textInputError = useInputTextError({
    isInvalid: !isValidSearchTerm(inputText),
    element: searchInput.current,
    message: constants.SEARCH_VALIDITY_MESSAGE,
    deps: [inputText],
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
    if (isValidSearchTerm(inputText)) {
      setSearchTerm(inputText);
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

export default SearchBar;
