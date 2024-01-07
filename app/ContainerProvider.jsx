import React from "react";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";

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
