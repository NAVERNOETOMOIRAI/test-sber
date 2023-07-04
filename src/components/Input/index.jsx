import React from "react";
import "./styles.scss";
const Input = (props) => {
  const { label, error, description, ...inputProps } = props;
  return (
    <div className="input__wrapper">
      <div className="input__header">{label}</div>
      <input className="input" {...inputProps} />
      {!!error && <div className="input__error">{error}</div>}
      {!!description && <div className="input__description">{description}</div>}
    </div>
  );
};
export default Input;
