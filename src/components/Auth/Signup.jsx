import React, { useState } from "react";
import Logo from "/logo.svg";

const Signup = ({ onActionBtnClick }) => {
  const [formData, setFormData] = useState({
    id: "signupForm",
    fullName: "",
    emailAddr: "",
    password: "",
    conPassword: "",
    phone: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName) {
      errors.fullName = "Full Name is required.";
    } else if (/\d/.test(formData.fullName)) {
      errors.fullName = "Full Name should not contain numbers.";
    }
    
    if (!formData.emailAddr) {
      errors.emailAddr = "Email Address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.emailAddr)) {
      errors.emailAddr = "Email Address is invalid.";
    }
    
    if (!formData.password) {
      errors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }
    
    if (!formData.conPassword) {
      errors.conPassword = "Confirm Password is required.";
    } else if (formData.conPassword !== formData.password) {
      errors.conPassword = "Passwords do not match.";
    }
    
    if (!formData.phone) {
      errors.phone = "Phone Number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone Number must be 10 digits.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form data
      console.log("Form submitted:", formData);
      // Reset form after successful submission
      setFormData({
        id: "signupForm",
        fullName: "",
        emailAddr: "",
        password: "",
        conPassword: "",
        phone: "",
      });
      setFormErrors({});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="animate fadeIn fixed top-0 left-0 z-[100] bg-[#515158a9] backdrop-blur-sm w-full h-full min-h-[100vh] flex justify-center items-center">
      <div className="p-10 relative w-auto max-w-md md:max-w-[50vw] h-auto md:min-h-[60vh] bg-[#ffffff] rounded-xl overflow-hidden animate popupDrop delay_12">
        <button
          type="button"
          value="closeSignup"
          className="absolute right-10 text-2xl font-semibold text-zinc-800"
          onClick={onActionBtnClick}
        >
          &times;
        </button>
        <div className="flex items-center flex-col">
          <figure>
            <img src={Logo} alt="Logo" width={40} className="rounded-md" />
          </figure>
          <h4 className="w-full text-zinc-800 text-center text-lg font-spotify_regular">
            Kharcha Khata
          </h4>
        </div>
        <span className="absolute -left-16 -top-20 text-[20rem] font-lato -z-[0] text-[#e9e9e9] select-none">
          ₹
        </span>
        <div className="relative z-[1] grid md:grid-cols-[40%_auto] gap-10">
          <div className="w-auto h-auto flex flex-col items-center gap-10">
            <h2 className="text-center font-poppins font-medium text-3xl text-zinc-800">
              Signup
            </h2>
            <p className="font-poppins font-medium text-base text-zinc-800">
              Join today! Create an account to take control of your finances,
              track your expenses, and achieve your financial goals
              effortlessly.
            </p>
          </div>
          <div>
            <form
              className="w-full h-auto flex flex-col items-end gap-3 mt-8"
              onSubmit={handleForm}
            >
              <label htmlFor="fullName" className="w-full">
                <h4 className="font-poppins text-base font-medium text-zinc-800 ">
                  Full Name
                </h4>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className={`w-full h-10 rounded-md outline-none px-3 bg-zinc-100 border border-zinc-400 border-solid shadow-2xl  font-poppins text-zinc-800 text-base font-medium ${formErrors.fullName ? 'border-red-500' : ''}`}
                  value={formData.fullName}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {formErrors.fullName && <p className="text-red-500">{formErrors.fullName}</p>}
              </label>
              <label htmlFor="emailAddr" className="w-full">
                <h4 className="font-poppins text-base font-medium text-zinc-800 ">
                  Email Address
                </h4>
                <input
                  type="email"
                  name="emailAddr"
                  id="emailAddr"
                  className={`w-full h-10 rounded-md outline-none px-3 bg-zinc-100 border border-zinc-400 border-solid shadow-2xl  font-poppins text-zinc-800 text-base font-medium ${formErrors.emailAddr ? 'border-red-500' : ''}`}
                  value={formData.emailAddr}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {formErrors.emailAddr && <p className="text-red-500">{formErrors.emailAddr}</p>}
              </label>
              <label htmlFor="password" className="w-full">
                <h4 className="font-poppins text-base font-medium text-zinc-800">
                  Password
                </h4>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={`w-full h-10 rounded-md outline-none px-3 bg-zinc-100 border border-zinc-400 border-solid shadow-2xl  font-poppins text-zinc-800 text-base font-medium ${formErrors.password ? 'border-red-500' : ''}`}
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {formErrors.password && <p className="text-red-500">{formErrors.password}</p>}
              </label>
              <label htmlFor="conPassword" className="w-full">
                <h4 className="font-poppins text-base font-medium text-zinc-800">
                  Confirm Password
                </h4>
                <input
                  type="password"
                  name="conPassword"
                  id="conPassword"
                  className={`w-full h-10 rounded-md outline-none px-3 bg-zinc-100 border border-zinc-400 border-solid shadow-2xl  font-poppins text-zinc-800 text-base font-medium ${formErrors.conPassword ? 'border-red-500' : ''}`}
                  value={formData.conPassword}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {formErrors.conPassword && <p className="text-red-500">{formErrors.conPassword}</p>}
              </label>
