import { useState } from "react";
import { useValidate } from "./useValidate";

export const useInput = (initialState, validations) => {
  const [value, setValue] = useState(initialState ?? "");
  const [forceValidate, setForceValidate] = useState(0);
  const error = useValidate(value, validations, forceValidate);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onBlur = () => {
    setForceValidate((prev) => prev + 1);
  };
  const onFocus = () => {
    setForceValidate((prev) => prev + 1);
  };
  return {
    value,
    onBlur,
    onChange,
    onFocus,
    error,
  };
};
