import NavBar from "@/components/shared/NavBar";
import React from "react";

const ContainerProvider = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default ContainerProvider;
