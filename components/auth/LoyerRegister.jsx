"use client";
import React, { useState } from "react";
import CustomStepper from "./CustomStepper";
import FormControl from "./FormControl";
import { Button } from "../ui/button";
import StepOne from "./StepOne";
import { useSelector } from "react-redux";
import StepTwo from "./StepTwo";

const LoyerRegister = () => {
  const { activeStep } = useSelector((state) => state.auth);
  return (
    <div className="w-3/4 flex flex-col  justify-center p-[20px] gap-4 rounded-tl-none rounded-bl-none rounded-tr-3xl  rounded-br-3xl bg-[#3B372C]">
      <h1 className="text-[#FFC700] text-center text-[30px] font-semibold">
        SIGN IN
      </h1>
      <div>
        <CustomStepper />
      </div>
      {activeStep === 0 && <StepOne />}
      {activeStep === 1 && <StepTwo />}
    </div>
  );
};

export default LoyerRegister;
