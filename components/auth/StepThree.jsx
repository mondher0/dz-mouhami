"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const StepThree = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-10">
      <h1 className="text-white text-[30px] text-center font-semibold">
        Votre demande sera examinée par nos <br /> services , veuiller consulter
        votre log in <br /> régulierement.Merci!
      </h1>
      <Button
        onClick={() => {
          router.push("/");
        }}
      >
        Go home
      </Button>
    </div>
  );
};

export default StepThree;
