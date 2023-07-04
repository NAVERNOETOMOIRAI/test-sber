import React, { useState } from "react";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import { FIRST_STEP, SECOND_STEP } from "./consts";

const RegistrationForm = () => {
  const [step, setStep] = useState(FIRST_STEP);
  const [payload, setPayload] = useState({});
  const handleFirstStepSubmit = (data) => {
    setPayload(data);
    setStep(SECOND_STEP);
  };
  const handleSecondStepSubmit = (data) => {
    const newPayload = { ...payload, ...data };
    setPayload(newPayload);
    console.log(newPayload);
  };
  const handleBackBtnClick = () => {
    setStep(FIRST_STEP);
  };
  return (
    <>
      {step === FIRST_STEP ? (
        <FirstStep onSubmit={handleFirstStepSubmit} {...payload} />
      ) : (
        <SecondStep
          onSubmit={handleSecondStepSubmit}
          onBackBtnClick={handleBackBtnClick}
        />
      )}
    </>
  );
};
export default RegistrationForm;
