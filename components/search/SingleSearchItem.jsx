"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const SingleSearchItem = () => {
  const stars = Array(5).fill(0);
  const router = useRouter();
  return (
    <div className="border-solid border-[3px] border-[#FFC700] w-full p-5 flex items-center gap-5">
      <div>
        <Image src="/images/loyer-img.png" width={210} height={210} />
      </div>
      <div className="flex flex-col items-start justify-center gap-3">
        <h1 className="text-[#FFC700] text-[30px] font-bold">
          Steven J.J Weisman{" "}
        </h1>
        <div className="text-[#FFC700] text-[20px] font-semibold flex items-center">
          {stars.map((_, i) => (
            <span key={i} className="text-[20px]">
              ⭐
            </span>
          ))}
          4.9
          <p className="ml-5 text-white font-medium text-[16px]">16 reviews</p>
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="text-white font-medium text-[16px]">
            Commercial Real Estate Attorney at Seattle, WA
          </p>
          <p className="text-white font-medium text-[16px]">
            Rue 16,amizour,Bejaia
          </p>
        </div>
        <p className="text-[18px] font-semibold text-white">
          I am the first and only Board Certified Marital and family Law
          Attorney in Lake County since 2004. I have been a practicing attorney
          for 30 years. I am also a Fellow..........
        </p>
      </div>
      <Button
        className="font-bold"
        onClick={() => {
          router.push("/loyers/5");
        }}
      >
        Voir Le Profil{" "}
      </Button>
    </div>
  );
};

export default SingleSearchItem;
