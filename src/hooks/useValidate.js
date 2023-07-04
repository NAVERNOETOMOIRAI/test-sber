import { useEffect, useState } from "react";

export const useValidate = (value, validations, forceValidate) => {
  const [error, setError] = useState("");
  useEffect(() => {
    let error = "";
    if (!forceValidate) return;
    for (const validation in validations) {
      switch (validation) {
        case "isEmpty":
          !value && (error = "Поле не может быть пустым");
          break;
        case "minLength":
          validations[validation] > value.length &&
            !error &&
            (error = "Поле должно быть нее менее 8 символов");
          break;
        case "isEmail":
          const rexEmail =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          !rexEmail.test(String(value?.toLowerCase())) &&
            !error &&
            (error = "e-mail указан не верно");
          break;
        case "isPhone":
          const rexPhone = /^\+?7(9\d{9})$/;
          !rexPhone.test(Number(value)) &&
            !error &&
            (error = "Телефон указан неверно");
          break;
        default:
          setError("");
          break;
      }
    }
    setError(error);
  }, [forceValidate]);
  return error;
};
