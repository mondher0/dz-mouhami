"use client";
import Image from "next/image";
import React from "react";
import { IoStarSharp } from "react-icons/io5";

const TopRatedLoyerCard = ({ topLoyer }) => {
  console.log(topLoyer);
  const { user, address, rating, image } = topLoyer || {};
  const { fname, lname } = user || {};
  const numberOfstars = Array(rating || 0).fill(0);
  return (
    <div className="flex flex-col items-start justify-center gap-4 border-b-[2px] border-b-[#FFC700] w-[300px]">
      <div className="shadow-custom h-[535px] w-[300px] bg-[#D9D9D9] hover:cursor-pointer">
        <img
          src={image}
          alt="image"
          // className="h-[535px] w-[300px] object-cover"
        />
      </div>
      <div className="flex flex-col items-start justify-center">
        <p className="text-[#211715] font-semibold text-[24px]">
          {fname} {lname}
        </p>
        <div className="flex items-center">
          {numberOfstars.map((index) => (
            <IoStarSharp size={30} color="#FFD700" key={index} />
          ))}
        </div>
        <p className="text-[#FFC700] mb-4">{address}</p>
      </div>
    </div>
  );
};

export default TopRatedLoyerCard;
