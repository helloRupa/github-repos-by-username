import PropTypes from "prop-types";
import SubmitButton from "../../../components/SubmitButton";
import ClearButton from "../../../components/ClearButton";

const Buttons = (props) => {
  const { handleClear } = props;

  return (
    <div className="buttons">
      <SubmitButton display="Search" />
      <ClearButton onClick={handleClear} />
    </div>
  );
};

Buttons.propTypes = {
  handleClear: PropTypes.func,
};

export default Buttons;
