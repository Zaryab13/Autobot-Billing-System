import { useEffect, useState } from "react";

const useInput = (initialValue, validate) => {
  const [enteredValue, setEnteredValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    // Update the enteredValue when the initial value prop changes
    setEnteredValue(initialValue);
  }, [initialValue]);
  // const valueAsString = typeof enteredValue === "string" ? enteredValue : "";

  const isValid = validate(enteredValue);
  const isError = !isValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue(initialValue);
    setIsTouched(false);
  };

  return {
    enteredValue,
    isValid,
    isError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
