"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const SingleSearchItem = ({ lowyer }) => {
  const { id, user, address, rating, image, categorie, description } =
    lowyer || {};
  const { fname, lname } = user || {};
  const { name } = categorie || {};
  const stars = Array(rating || 0).fill(0);
  const router = useRouter();
  return (
    <div className="border-solid border-[3px] border-[#FFC700] w-full p-5 flex items-center gap-5">
      <img src={image} alt="image" width={210} height={210} />
      <div className="flex flex-col items-start justify-center gap-3">
        <h1 className="text-[#FFC700] text-[30px] font-bold">
          {fname} {lname}
        </h1>
        <div className="text-[#FFC700] text-[20px] font-semibold flex items-center">
          {stars.map((_, i) => (
            <span key={i} className="text-[20px]">
              ⭐
            </span>
          ))}
          {rating}
          <p className="ml-5 text-white font-medium text-[16px]">
            {rating} reviews
          </p>
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="text-white font-medium text-[16px]">{name}</p>
          <p className="text-white font-medium text-[16px]">{address}</p>
        </div>
        <p className="text-[18px] font-semibold text-white">{description}</p>
      </div>
      <Button
        className="font-bold"
        onClick={() => {
          router.push(`/loyers/${id}`);
        }}
      >
        Voir Le Profil{" "}
      </Button>
    </div>
  );
};

export default SingleSearchItem;
