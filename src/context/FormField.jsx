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
    requestAnimationFrame(() => {
      setInterval(() => {
        setShowPass(false);
      }, 11000);
    });
  }, []);

  return (
    <label htmlFor={name} className="w-full">
      <h4 className="font-poppins text-base font-medium text-zinc-800">
        {label}
      </h4>
      <div className="relative flex flex-col md:flex-row items-start md:items-center gap-2">
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
          className={`w-full h-10 rounded-md outline-none px-3 bg-zinc-100 border shadow-2xl font-poppins text-zinc-800 text-base font-medium`}
        />
        {type === "password" && (
          <span
            className="absolute top-3 right-3 cursor-pointer"
            onClick={() => {
              setShowPass(!showPass);
            }}
          >
            {!showPass ? <FiEyeOff /> : <FiEye />}
          </span>
        )}
      </div>
    </label>
  );
};

export default FormField;
