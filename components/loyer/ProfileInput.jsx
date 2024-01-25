import React from "react";

const ProfileInput = ({ name, type, id, data }) => {
  return (
    <div className="flex flex-col items-start justify-start gap-3 w-full">
      <label className="text-[#FFC700] text-[24px] font-semibold" htmlFor={id}>
        {name}
      </label>
      <input
        type={type}
        className="w-full  border border-solid border-black rounded-md bg-blue-100 p-[10px] outline-none text-[#001F3F] font-bold text-[25px]"
        value="Steven J.J Weisman"
        id={id}
      />
    </div>
  );
};

export default ProfileInput;
