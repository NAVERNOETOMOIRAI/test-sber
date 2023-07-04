import React from "react";
import RegistrationForm from "../../components/registrationForm";
import "./styles.scss";

const Registration = () => {
  return (
    <div className="registration">
      <div className="registration__header">Регистрация</div>
      <RegistrationForm />
    </div>
  );
};
export default Registration;
