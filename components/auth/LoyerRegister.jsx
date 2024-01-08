"use client";
import React, { useState } from "react";
import CustomStepper from "./CustomStepper";
import StepOne from "./StepOne";
import { useSelector } from "react-redux";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const LoyerRegister = () => {
  const { activeStep } = useSelector((state) => state.auth);
  return (
    <div className="w-3/4 flex flex-col  justify-center p-[20px] gap-4 rounded-tl-none rounded-bl-none rounded-tr-3xl  rounded-br-3xl bg-[#3B372C]">
      <h1 className="text-[#FFC700] text-center text-[30px] font-semibold">
        SIGN IN
      </h1>
      <div>
        <CustomStepper
          step1="Je suis un avocat"
          step2="Infomations Personnelles"
          step3="Congratlations"
        />
      </div>
      {activeStep === 0 && <StepOne />}
      {activeStep === 1 && <StepTwo />}
      {activeStep === 2 && <StepThree />}
    </div>
  );
};

export default LoyerRegister;
