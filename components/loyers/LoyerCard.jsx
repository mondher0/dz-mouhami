import React from "react";
import { FaStar } from "react-icons/fa";
import LoyerExperience from "./LoyerExperience";
import ContactCard from "./ContactCard";

const LoyerCard = ({ lowyer }) => {
  const { user, address, rating, image, categorie, description } = lowyer || {};
  const { fname, lname } = user || {};
  const { name } = categorie || {};
  const stars = Array(rating).fill(0);
  return (
    <div className="flex items-center gap-32 border border-solid border-gray-300 rounded-lg bg-transparent shadow-md p-10 m-9 bg-white">
      <div>
        <img src={image} alt="Picture of the author" width={270} height={270} />
      </div>
      <div className="flex items-center ">
        <div className="flex flex-col items-start gap-5">
          <h1 className="text-[#001F3F]  font-semibold text-4xl">
            {fname} {lname}
          </h1>
          <p className="text-[#001F3F] font-semibold">{name}</p>
          <div className="flex ">
            {stars.map((data, index) => {
              return <FaStar size={20} color="#001F3F" key={index} />;
            })}
          </div>
          <LoyerExperience />
        </div>
        <ContactCard />
      </div>
    </div>
  );
};

export default LoyerCard;
