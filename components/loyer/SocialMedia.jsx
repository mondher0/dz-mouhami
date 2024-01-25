import { Facebook, Linkedin, Twitter } from "lucide-react";
import React from "react";
import SingleMedia from "./SingleMedia";

const SocialMedia = () => {
  const mediaList = [
    {
      name: "Facebook",
      icon: <Facebook color="#fff" />,
    },
    {
      name: "Twitter",
      icon: <Twitter color="#fff" />,
    },
    {
      name: "LinkedIn",
      icon: <Linkedin color="#fff" />,
    },
  ];
  return (
    <div className="flex gap-4 flex-col items-start justify-center w-4/5 border border-solid border-blue-900 rounded-lg bg-white shadow-md p-6">
      <p className="text-[#FFC700] text-[24px] font-semibold">Social media :</p>
      <div className="flex flex-col justify-center items-center gap-5">
        {mediaList.map((media) => {
          return <SingleMedia media={media} />;
        })}
      </div>
    </div>
  );
};

export default SocialMedia;
