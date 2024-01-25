import React from "react";
import LoyerCard from "../../../components/loyers/LoyerCard";
import NavLinks from "../../../components/loyers/NavLinks";
import AboutLoyer from "../../../components/loyers/AboutLoyer";
import AddressLoyer from "../../../components/loyers/AddressLoyer";
import ContactLoyer from "../../../components/loyers/ContactLoyer";
import ReviewsLoyer from "../../../components/loyers/ReviewsLoyer";
import TakeAppointement from "../../../components/loyers/TakeAppointement";

const SingleLoyerPage = () => {
  return (
    <main className="bg-white p-[30px]">
      <LoyerCard />
      <NavLinks />
      <AboutLoyer />
      <AddressLoyer />
      <ContactLoyer />
      <ReviewsLoyer />
      <TakeAppointement />
    </main>
  );
};

export default SingleLoyerPage;
