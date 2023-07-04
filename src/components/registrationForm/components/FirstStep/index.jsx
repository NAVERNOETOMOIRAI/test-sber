import React, { useEffect, useState } from "react";
import RegistrationFormWrapper from "../RegistrationFormWrapper";
import Input from "../../../Input";
import { useInput } from "../../../../hooks/useInput";

const FirstStep = (props) => {
  const { onSubmit, onBackBtnClick, login, password, phone } = props;
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const loginInput = useInput(login, { isEmpty: true });
  const passwordInput = useInput(password, {
    isEmpty: true,
    minLength: 8,
  });
  const phoneInput = useInput(phone, { isEmpty: true, isPhone: true });
  useEffect(() => {
    if (
      loginInput.value &&
      !loginInput.error &&
      passwordInput.value &&
      !passwordInput.error &&
      phoneInput.value &&
      !phoneInput.error
    ) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
  }, [loginInput, passwordInput, phoneInput]);
  return (
    <RegistrationFormWrapper
      btnLabel="Продолжить"
      onSubmit={onSubmit}
      isBtnDisabled={isBtnDisabled}
      onBackBtnClick={onBackBtnClick}
    >
      <Input
        label="Логин"
        name="login"
        {...loginInput}
        placeholder="Введите логин"
      />
      <Input
        label="Пароль"
        name="password"
        type="password"
        {...passwordInput}
        placeholder="Введите пароль"
      />
      <Input
        label="Номер Телефона"
        type="tel"
        name="phone"
        {...phoneInput}
        placeholder="+79001234567"
        description="На случай, если  вы забудете свой пароль"
      />
    </RegistrationFormWrapper>
  );
};
export default FirstStep;
