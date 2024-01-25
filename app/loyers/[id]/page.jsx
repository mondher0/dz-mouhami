import React from "react";
import LoyerCard from "../../../components/loyers/LoyerCard";
import NavLinks from "../../../components/loyers/NavLinks";
import AboutLoyer from "../../../components/loyers/AboutLoyer";
import AddressLoyer from "../../../components/loyers/AddressLoyer";

const SingleLoyerPage = () => {
  return (
    <main className="bg-white p-[30px]">
      <LoyerCard />
      <NavLinks />
      <AboutLoyer />
      <AddressLoyer />
    </main>
  );
};

export default SingleLoyerPage;
