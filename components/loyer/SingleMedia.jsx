import React from "react";

const SingleMedia = ({ media }) => {
  return (
    <div className="flex items-center gap-3 bg-[#F3F6FB] rounded-lg w-[300px] p-2">
      <div className="bg-[#001F3F] w-[40px] h-[40px] flex items-center justify-center">
        {media.icon}
      </div>
      <p className="font-bold"> {media.name}</p>
    </div>
  );
};

export default SingleMedia;
