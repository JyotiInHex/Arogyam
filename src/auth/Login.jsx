import React from "react";
import { useForm } from "../context/FormContext";
import FormField from "../context/FormField";

const Login = ({ onActionBtnClick }) => {
  const { formData, formErrors, updateFormData, validateForm, resetForm } =
    useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted Successfully:", formData);
    resetForm();
  };

  return (
    <section className="fixed top-0 left-0 w-full h-full bg-[#3131318c] z-50 flex items-center justify-center">
      <button
        type="button"
        className="absolute top-0 right-0 -translate-x-6 translate-y-8 font-poppins font-medium text-base text-zinc-800 w-fit h-fit bg-slate-100 p-2 px-3 rounded-lg z-30"
        value="hideLoginFrom"
        onClick={onActionBtnClick}
      >
        Close
      </button>
      <form
        action=""
        onSubmit={handleSubmit}
        id="loginForm"
        className="relative animate slide-in-left delay_1 w-auto md:w-1/2 h-auto mx-2 bg-blue-50 p-10 py-16 grid md:grid-cols-2 items-start gap-6 rounded-md"
      >
        <div className="flex flex-col gap-5">
          <h2 className="text-8xl font-montserrat font-semibold text-blue-100 drop-shadow-sm">
            Login
          </h2>
          <p className="text-base text-left md:text-justify font-roboto font-medium text-zinc-800">
            Welcome back to Aroviya! Log in using your email or phone number to
            access your personalized wellness dashboard, explore tailored health
            solutions, and stay on top of your health goals effortlessly.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <FormField
            label="User Name or Email Id"
            name="userName"
            type="text"
            placeholder="Enter your user name or email id"
          />
          <div>
            <FormField
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="w-full text-right text-base text-[#fe7f18] font-poppins font-medium"
              value="showForgotPass"
              onClick={onActionBtnClick}
            >
              Forgot?
            </button>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h2 className="text-base text-zinc-800 font-poppins font-semibold mb-1">
              Or
            </h2>
            <FormField
              label="Phone Number"
              name="phoneNumber"
              type="tel"
              placeholder="Enter your phone number"
              pattern="[0-9]{10}"
              maxLength="10"
            />
          </div>

          <button
            type="button"
            className="w-full h-auto bg-[#fe7f18] py-[5px] text-blue-50 text-center text-lg font-poppins font-medium rounded-md"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <div className="w-full h-auto flex justify-center items-center gap-2">
            <h2 className="text-center text-base text-zinc-800 font-poppins font-medium">
              New here?
            </h2>
            <button
              type="button"
              className="text-center text-base text-[#fe7f18] font-poppins font-medium"
              value="showSignupFrom"
              onClick={onActionBtnClick}
            >
              Make an Account
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
