import React from "react";
import { useSelector } from "react-redux";
import Stepper from "react-stepper-horizontal";

const CustomStepper = ({ step1, step2, step3 }) => {
  const { activeStep } = useSelector((state) => state.auth);
  let steps = [{ title: step1 }, { title: step2 }];
  if (step3) {
    steps.push({ title: step3 });
  }
  return (
    <Stepper
      steps={steps}
      activeStep={activeStep}
      activeColor="#FFC700"
      completeColor="#FFC700"
      activeTitleColor="#FFC700"
      completeTitleColor="#FFC700"
      completeBarColor="#FFC700"
    />
  );
};

export default CustomStepper;
