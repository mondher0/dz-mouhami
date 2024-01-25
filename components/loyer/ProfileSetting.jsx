import React from "react";
import ProfileInput from "./ProfileInput";
import Experience from "./Experience";
import Image from "next/image";

const ProfileSetting = () => {
  return (
    <div className="flex flex-col items-start justify-center w-4/5 border border-solid border-blue-900 rounded-lg bg-white shadow-md p-6">
      <div className="flex items-start gap-8">
        <div className="relative">
          <Image
            src="/images/loyer-img.png"
            width={250}
            height={250}
            className="filter blur-sm"
          />
          <div className="absolute top-1/2 left-[37%] ">
            <label
              htmlFor="profile-pic"
              className="hover:hover text-white font-bold text-[20px]"
            >
              Changer
            </label>
            <input type="file" id="profile-pic" className="opacity-0" />
          </div>
        </div>
        <div className="flex items-start flex-col gap-5 w-full">
          <ProfileInput />
          <Experience />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-3 w-full">
        <label className="text-[#FFC700] text-[24px] font-semibold">
          description
        </label>
        <textarea
          rows={3}
          type="texe"
          className="w-full border border-solid border-black rounded-md bg-blue-100 p-[10px] outline-none text-[#001F3F] font-medium text-[17px] h-fit"
        >
          I am an experienced [Type of Law] lawyer dedicated to delivering
          personalized legal solutions. With a focus on [Specific Area of Law],
          I prioritize clear communication and client involvement to achieve the
          best outcomes.
        </textarea>
      </div>
    </div>
  );
};

export default ProfileSetting;
