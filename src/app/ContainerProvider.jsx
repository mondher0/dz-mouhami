import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import React from "react";

const ContainerProvider = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default ContainerProvider;
