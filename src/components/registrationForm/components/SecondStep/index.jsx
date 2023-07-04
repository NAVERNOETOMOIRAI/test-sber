import React, { useEffect, useState } from "react";
import RegistrationFormWrapper from "../RegistrationFormWrapper";
import Input from "../../../Input";
import { useInput } from "../../../../hooks/useInput";

const SecondStep = (props) => {
  const { onSubmit, onBackBtnClick } = props;
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const nameInput = useInput("", { isEmpty: true });
  const surnameInput = useInput("", { isEmpty: true });
  const emailInput = useInput("", { isEmpty: true, isEmail: true });
  useEffect(() => {
    if (
      nameInput.value &&
      !nameInput.error &&
      surnameInput.value &&
      !surnameInput.error &&
      emailInput.value &&
      !emailInput.error
    ) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
  }, [emailInput, surnameInput, nameInput]);
  return (
    <RegistrationFormWrapper
      btnLabel="Зарегистрироваться"
      onSubmit={onSubmit}
      isBtnDisabled={isBtnDisabled}
      isBackBtnVisible
      onBackBtnClick={onBackBtnClick}
    >
      <Input
        label="Имя"
        name="name"
        {...nameInput}
        placeholder="Введите ваше имя"
      />
      <Input
        label="Фамилия"
        name="surname"
        {...surnameInput}
        placeholder="Введите вашу фамилию"
      />
      <Input
        label="E-mail"
        name="email"
        {...emailInput}
        placeholder="Введите ваш E-mail"
        description="Будем присылать крутые открытки по праздникам"
      />
    </RegistrationFormWrapper>
  );
};
export default SecondStep;
