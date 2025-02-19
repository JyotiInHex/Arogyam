import React from "react";
import { useForm } from "../context/FormContext";
import FormField from "../context/FormField";

const ForgotPassword = ({ onActionBtnClick }) => {
  const { formData, validateForm, resetForm, setFormType} =
    useForm();
    
  const validatePassword = (password) => {
    if (!password) return "Password is required.";
    if (password.length < 6) return "Password must be at least 6 characters.";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormType("ForgotPassword");
    
    console.log("Form Submitted Successfully:", formData);
    resetForm();
    validateForm(formData.newPassword)
  };

  return (
    <section className="fixed top-0 left-0 w-full h-full bg-[#3131318c] backdrop-blur-md z-50 flex items-center justify-center overFlow-scroll">
      <button
        type="button"
        className="absolute top-0 right-0 -translate-x-6 translate-y-8 font-poppins font-medium text-base text-zinc-800 w-fit h-fit bg-slate-100 p-2 px-3 rounded-lg z-30"
        onClick={onActionBtnClick}
      >
        Close
      </button>
      <div className="animate slide-in-left fade-in required:translate-x-0 w-auto md:w-1/2 h-auto bg-blue-50 p-5 py-12 flex flex-col items-center justify-center gap-10 rounded-md overflow-hidden">
        <figure className="flex flex-col items-center justify-center">
          <img src="./aroviya.svg" alt="logo" width={20} />
          <h3 className="text-lg text-zinc-800 font-poppins font-semibold">
            Aroviya
          </h3>
        </figure>
        <form
          action=""
          onSubmit={handleSubmit}
          id="loginForm"
          className="relative animate slide-in-left delay_1 mx-2 grid md:grid-cols-2 items-start gap-6 "
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-6xl font-playfair font-semibold text-blue-200 drop-shadow-sm">
              You're so close!
            </h2>
            <h3 className="text-xl font-lato font-semibold text-zinc-700">
              Create a new password
            </h3>
            <p className="text-base font-roboto font-medium text-zinc-800">
              Set a new password to secure your Aroviya account and continue
              accessing personalized health insights, expert guidance, and
              wellness tools without interruption.
            </p>
          </div>

          <div className="flex flex-col gap-2 bg-white p-5 rounded-lg drop-shadow-lg">
            <FormField
              label="New Password"
              name="newPassword"
              type="password"
              placeholder="Enter your new password"
            />
            <FormField
              label="Confirm New Password"
              name="confirmNewPassword"
              type="text"
              placeholder="Re-enter your new password"
            />

            <button
              type="button"
              className="w-full h-auto bg-[#fe7f18] py-[5px] text-blue-50 text-center text-lg font-poppins font-medium rounded-md"
              onClick={handleSubmit}
            >
              Proceed
            </button>

            <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center gap-2">
              <h2 className="text-center text-base text-zinc-800 font-poppins font-medium">
                Already Have Account?
              </h2>
              <button
                type="button"
                className="text-center text-base text-[#fe7f18] font-poppins font-medium"
                value="showLoginFrom"
                onClick={onActionBtnClick}
              >
                Login Here
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
