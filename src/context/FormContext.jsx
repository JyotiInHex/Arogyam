import React, { createContext, useContext, useState } from "react";

// Create the FormContext
const FormContext = createContext();

// FormProvider Component
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

  // Update form field data
  const updateFormData = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Update form errors
  const updateFormErrors = (errors) => {
    setFormErrors(errors);
  };

  // Validate form data using a schema (e.g., Yup)
  const validateForm = (schema) => {
    const errors = {};
    try {
      schema.validateSync(formData, { abortEarly: false });
    } catch (validationErrors) {
      validationErrors.inner.forEach((err) => {
        errors[err.path] = err.message;
      });
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Reset form data and errors
  const resetForm = () => {
    setFormData({});
    setFormErrors({});
  };

  return (
    <FormContext.Provider
      value={{ formData, formErrors, updateFormData, updateFormErrors, validateForm, resetForm }}
    >
      {children}
    </FormContext.Provider>
  );
};

// Custom hook to use the FormContext
export const useForm = () => {
  return useContext(FormContext);
};
