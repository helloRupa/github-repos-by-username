import { useEffect } from "react";

const TextError = ({ message }) => (
  <span className="input-error">{message}</span>
);

const useInputTextError = (props) => {
  const { isInvalid, element, message, deps = [] } = props;

  useEffect(() => {
    const setAriaInvalid = (element, isInvalid) => {
      element.setAttribute("aria-invalid", isInvalid);
    };

    if (!element) {
      return;
    }

    setAriaInvalid(element, isInvalid);
  }, [isInvalid, element, deps]);

  return isInvalid ? <TextError message={message} /> : null;
};

export default useInputTextError;
