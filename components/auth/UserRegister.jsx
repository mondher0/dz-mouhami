"use client";
import React from "react";
import CustomStepper from "./CustomStepper";
import { useSelector } from "react-redux";
import UserStepOne from "./UserStepOne";
import UserStepTwo from "./UserStepTwo";

const UserRegister = () => {
  const { activeStep } = useSelector((state) => state.auth);
  return (
    <div className="w-3/4 flex flex-col  justify-center p-[20px] gap-4 rounded-tr-none rounded-br-none rounded-tl-3xl rounded-bl-3xl bg-white">
      <h1 className="text-[#FFC700] text-center text-[30px] font-semibold">
        SIGN IN
      </h1>
      <div>
        <CustomStepper
          step1="je suis un particulier / entreprise"
          step2="Congratlations"
        />
        {activeStep === 0 && <UserStepOne />}
        {activeStep === 1 && <UserStepTwo />}
      </div>
    </div>
  );
};

export default UserRegister;
