import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import LoyerExperience from "./LoyerExperience";
import ContactCard from "./ContactCard";

const LoyerCard = () => {
  const stars = Array(5).fill(0);
  return (
    <div className="flex items-center gap-32 border border-solid border-gray-300 rounded-lg bg-transparent shadow-md p-10 m-9 bg-white">
      <div>
        <Image
          src="/images/loyer-img.png"
          alt="Picture of the author"
          width={270}
          height={270}
        />
      </div>
      <div className="flex items-center ">
        <div className="flex flex-col items-start gap-5">
          <h1 className="text-[#001F3F]  font-semibold text-4xl">
            Bouzira Mohamed
          </h1>
          <p className="text-[#001F3F] font-semibold">
            Personal Injury , family{" "}
          </p>
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
