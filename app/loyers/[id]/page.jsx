import React from "react";
import LoyerCard from "../../../components/loyers/LoyerCard";
import NavLinks from "../../../components/loyers/NavLinks";
import AboutLoyer from "../../../components/loyers/AboutLoyer";
import AddressLoyer from "../../../components/loyers/AddressLoyer";
import ContactLoyer from "../../../components/loyers/ContactLoyer";
import ReviewsLoyer from "../../../components/loyers/ReviewsLoyer";
import TakeAppointement from "../../../components/loyers/TakeAppointement";
import { baseUrl } from "../../../lib/utils";

const SingleLoyerPage = async ({ params }) => {
  const { id } = params;
  console.log(id);

  // get lowyer
  const getLoyer = async () => {
    try {
      const response = await fetch(`${baseUrl}lawyers/lawyer/${id}`, {
        cache: "no-cache",
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  // get lowyer reviews
  const getLoyerReviews = async () => {
    try {
      const response = await fetch(`${baseUrl}reviews/lawyer/${id}`, {
        cache: "no-cache",
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  const lowyerData = getLoyer();
  const lowyerReviewsData = getLoyerReviews();

  const [lowyer, lowyerReviews] = await Promise.all([
    lowyerData,
    lowyerReviewsData,
  ]);

  console.log(lowyerReviews);
  return (
    <main className="bg-white p-[30px]">
      <LoyerCard lowyer={lowyer} />
      <NavLinks />
      <AboutLoyer desc={lowyer.description} />
      <AddressLoyer
        address={lowyer.address}
        latitude={lowyer.latitude}
        longitude={lowyer.longitude}
      />
      <ContactLoyer contact={lowyer} />
      <ReviewsLoyer lowyerReviews={lowyerReviews} id={lowyer.id} />
      <TakeAppointement />
    </main>
  );
};

export default SingleLoyerPage;
