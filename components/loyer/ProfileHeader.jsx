import React from "react";

const ProfileHeader = () => {
  return (
    <div className="w-full rounded-lg bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 shadow-md p-6 flex flex-col justify-center items-start">
      <h1 className="text-white text-[25px] font-bold">Profile setting</h1>
      <p className="text-[20px] text-white">change profile information</p>
    </div>
  );
};

export default ProfileHeader;
