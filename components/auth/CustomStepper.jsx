import React from "react";
import { useSelector } from "react-redux";
import Stepper from "react-stepper-horizontal";

const CustomStepper = () => {
  const { activeStep } = useSelector((state) => state.auth);
  return (
    <Stepper
      steps={[
        { title: "Je suis un avocat" },
        { title: "Infomations Personnelles " },
        { title: "Congratlation" },
      ]}
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
