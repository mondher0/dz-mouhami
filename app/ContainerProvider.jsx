"use client";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";
import { usePathname } from "next/navigation";
import LoyerContainer from "../components/loyer/LoyerContainer";

const ContainerProvider = ({ children }) => {
  const path = usePathname();
  if (path.includes("/loyer")) return <LoyerContainer children={children} />;
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default ContainerProvider;
