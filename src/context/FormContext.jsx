import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [formType, setFormType] = useState("");

  const updateFormData = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const updateFormErrors = (errors) => {
    setFormErrors(errors);
  };

  const validateForm = () => {
    const errors = {};
    const emailRegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passRegx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/g;

    switch (formType) {
      case "Login":
        if (!formData.email) {
          toast.warn("Please enter your user name or email");
          errors.email = "!";
        } else if (!emailRegx.test(formData.email)) {
          toast.warn("Invalid email format!");
          errors.email = "!";
        } else if (!formData.password) {
          toast.warn("Please enter your password");
          errors.password = "!";
        }
        break;

      case "Signup":
        if (!formData.name) {
          toast.warn("Please enter your name");
          errors.name = "!";
        } else if (!formData.email) {
          toast.warn("Please enter your email id");
          errors.email = "!";
        } else if (!emailRegx.test(formData.email)) {
          toast.info("Invalid email format!");
          errors.email = "!";
        } else if (!formData.password) {
          toast.warn("Please create a password");
          errors.password = "!";
        } else if (!passRegx.test(formData.password)) {
          toast.info(
            "Password must be 6-64 chars, with at least 1 lowercase, 1 uppercase, 1 number, and 1 special character."
          );
          errors.password = "!";
        } else if (!formData.confirmPassword) {
          toast.warn("Please re-confirm your password");
          errors.confirmPassword = "!";
        } else if (formData.password !== formData.confirmPassword) {
          toast.warn("Password and Confirm Password must be matched!");
          errors.confirmPassword = "!";
        }
        break;

      case "ForgotPassword":
        if (!formData.regEmail) {
          toast.warn("Please enter your registered email address");
          errors.regEmail = "!";
        } else if (!emailRegx.test(formData.regEmail)) {
          toast.info("Invalid email format!");
          errors.regEmail = "!";
        }
        break;

      default:
        break;
    }
    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const resetForm = () => {
    setFormData({});
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        formErrors,
        formType,
        updateFormData,
        updateFormErrors,
        validateForm,
        resetForm,
        setFormType,
        setFormErrors,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  return useContext(FormContext);
};
