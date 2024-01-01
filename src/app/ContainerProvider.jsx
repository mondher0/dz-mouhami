import NavBar from "@/components/shared/NavBar";
import React from "react";

const ContainerProvider = ({ children }) => {
  return (
    <div className="container">
      <NavBar />
      {children}
    </div>
  );
};

export default ContainerProvider;
