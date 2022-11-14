import { useState, useCallback } from "react";

import isEmail from "validator/lib/isEmail";
import { REGEX } from "./constants";

export default function useValidation(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(evt) {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    const validationMessage = target.validationMessage;

    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setSpecificValuesErrors(name, value, validationMessage);

    setIsValid(target.closest("form").checkValidity());
  }

  function setValuesErrors(name, validationMessage) {
    setErrors((prevState) => ({
      ...prevState,
      [name]: validationMessage,
    }));
  }

  function setSpecificValuesErrors(name, value, validationMessage) {
    switch (name) {
      case "name":
        if (value.length === 0) {
          setErrors((prevState) => ({
            ...prevState,
            [name]: "Необходимо указать имя",
          }));
        } else if (value.length < 2 || value.length > 30) {
          setErrors((prevState) => ({
            ...prevState,
            [name]: "Имя должно содержать от 2 до 30 символов",
          }));
        } else if (REGEX.test(value) !== true) {
          setErrors((prevState) => ({
            ...prevState,
            [name]:
              "Имя должно содержать только символы латиницы, кириллицы, пробел, дефис",
          }));
        } else {
          setValuesErrors(name, validationMessage);
        }
        break;

      case "email":
        if (!isEmail(value)) {
          setErrors((prevState) => ({
            ...prevState,
            [name]: "Введен некорректный email",
          }));
        } else if (value.length === 0) {
          setErrors((prevState) => ({
            ...prevState,
            [name]: "Необходимо указать email",
          }));
        } else {
          setValuesErrors(name, validationMessage);
        }
        break;

      case "password":
        if (value.length === 0) {
          setErrors((prevState) => ({
            ...prevState,
            [name]: "Введите пароль",
          }));
        } else {
          setValuesErrors(name, validationMessage);
        }
        break;

      default:
        setValuesErrors(name, validationMessage);
    }
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm, setValues };
}
