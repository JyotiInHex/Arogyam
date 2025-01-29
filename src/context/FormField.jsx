import React, { useState } from "react";
import { useForm } from "./FormContext";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useEffect } from "react";

const FormField = ({ label, name, type, placeholder, pattern, maxLength }) => {
  const { formData, formErrors, updateFormData } = useForm();
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    updateFormData(name, value);
  };

  useEffect(() => {
    const autoHide = setInterval(() => {
      requestAnimationFrame(() => {
        setShowPass(false);
      });
    }, 11000);
  }, []);

  return (
    <label htmlFor={name} className="w-full">
      <h4 className="font-poppins text-base font-medium text-zinc-800">
        {label}
      </h4>
      <div className="relative flex items-center gap-2">
        <input
        autoComplete="off"
          type={showPass ? "text" : type}
          name={name}
          id={name}
          placeholder={placeholder}
          value={formData[name] || ""}
          pattern={pattern}
          maxLength={maxLength}
          onChange={handleChange}
          className={`w-full h-10 rounded-md outline-none px-3 bg-zinc-100 border border-zinc-400 shadow-2xl font-poppins text-zinc-800 text-base font-medium ${
            formErrors[name] ? "border-red-500" : ""
          }`}
        />
        {type === "password" && (
          <span className="absolute right-3 cursor-pointer"
            onClick={() => {
              setShowPass(!showPass);
            }}
          >
            {!showPass ? <FiEyeOff /> : <FiEye/>}
          </span>
        )}
      </div>
      {formErrors[name] && <p className="text-red-500">{formErrors[name]}</p>}
    </label>
  );
};

export default FormField;
