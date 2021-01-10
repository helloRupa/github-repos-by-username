export const clearInputValidityError = (ref) => {
  ref.current.setCustomValidity("");
};

export const setCustomValidityMessage = (ref, message) => {
  ref.current.setCustomValidity(message);
  ref.current.reportValidity();
};

// export const setAriaInvalid = (element, isInvalid) => {
//   element.setAttribute("aria-invalid", isInvalid);
// };
