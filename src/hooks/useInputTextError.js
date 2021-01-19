import { useEffect } from "react";

const TextError = ({ message }) => (
  <span className="input-error">{message}</span>
);

const useInputTextError = (props) => {
  const { isInvalid, element, message } = props;

  useEffect(() => {
    if (!element) {
      return;
    }

    element.setAttribute("aria-invalid", isInvalid);
  }, [isInvalid, element]);

  return isInvalid ? <TextError message={message} /> : null;
};

export default useInputTextError;
