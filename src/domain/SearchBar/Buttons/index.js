import SubmitButton from "../../../components/SubmitButton";
import ClearButton from "../../../components/ClearButton";

const Buttons = (props) => {
  const { handleClear } = props;

  return (
    <div>
      <SubmitButton display="Search" />
      <ClearButton onClick={handleClear} />
    </div>
  );
};

export default Buttons;
