import React from "react";

const ContactCard = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 border border-solid border-[#8E8E8E] rounded-lg bg-white shadow-lg p-6">
      <p>Status</p>
      <div className="flex items-center text-[#FFC700] gap-1">
        <div className="w-[5px] h-[5px] rounded-full bg-[#FFC700]"></div>
        active
      </div>
      <button className="bg-[#FFC700] text-white font-bold rounded-md w-[263px] h-[47px]">
        Contacter
      </button>
      <button className="bg-[#001F3F] text-white font-bold rounded-md w-[263px] h-[47px]">
        Message
      </button>
      <button className="text-[#8E8E8E] font-bold rounded-md w-[263px] h-[47px] border border-solid border-[#8E8E8Ef] bg-white">
        Rate
      </button>
    </div>
  );
};

export default ContactCard;
