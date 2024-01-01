"use client";
import React from "react";
import { IoStarSharp } from "react-icons/io5";

const TopRatedLoyerCard = ({ topLoyer }) => {
  console.log(topLoyer);
  const { fullName, adresse, starsCount } = topLoyer;
  const numberOfstars = Array(starsCount || 0).fill(0);
  return (
    <div className="flex flex-col items-start justify-center gap-4 border-b-[2px] border-b-[#FFC700]">
      <div className="shadow-custom h-[535px] w-[300px] bg-[#D9D9D9] hover:cursor-pointer"></div>
      <div className="flex flex-col items-start justify-center">
        <p className="text-[#211715] font-semibold text-[24px]">{fullName}</p>
        <div className="flex items-center">
          {numberOfstars.map((index) => (
            <IoStarSharp size={30} color="#FFD700" key={index} />
          ))}
        </div>
        <p className="text-[#FFC700] mb-4">{adresse}</p>
      </div>
    </div>
  );
};

export default TopRatedLoyerCard;
