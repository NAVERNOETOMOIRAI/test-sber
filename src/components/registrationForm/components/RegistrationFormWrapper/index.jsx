import React from "react";
import "./styles.scss";
import Btn from "../../../Btn";

const RegistrationFormWrapper = (props) => {
  const {
    btnLabel,
    onSubmit,
    isBtnDisabled,
    onBackBtnClick,
    isBackBtnVisible,
    children,
    ...propsForm
  } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
    const formPayload = Array.from(event.target.elements)
      .filter((item) => item.tagName !== "BUTTON")
      .map((item) => [[item.name], [item.value][0]]);
    onSubmit(Object.fromEntries(formPayload));
  };
  const handleBackBtnClick = (event) => {
    event.preventDefault();
    onBackBtnClick();
  };
  return (
    <form className="registration-form" {...propsForm} onSubmit={handleSubmit}>
      <div className="registration-form__inputs">{children}</div>
      <div className="registration-form__footer">
        <Btn type="submit" children={btnLabel} disabled={isBtnDisabled} />
        {isBackBtnVisible && (
          <Btn
            className="registration-form__footer-back"
            children="< Назад"
            onClick={handleBackBtnClick}
          />
        )}
      </div>
    </form>
  );
};
export default RegistrationFormWrapper;
