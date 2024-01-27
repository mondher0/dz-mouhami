import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const SingleReview = ({ review }) => {
  const { rating, description, user } = review || {};
  const { fname, lname } = user || {};
  const stars = Array(rating).fill(0);
  return (
    <div className="flex items-start gap-5 flex-col rounded-xl bg-white  shadow-md p-6 w-full">
      <div className="flex items-center gap-5">
        <div>
          <Image
            src="/assets/user.svg"
            width={60}
            height={60}
            alt="user"
            priority
          />
        </div>
        <p className="text-[#001F3F] text-[20px] font-bold">
          {fname} {lname}
        </p>
        <div className="flex items-center gap-1">
          {stars.map((data, index) => {
            return <FaStar size={20} color="#FFC700" key={index} />;
          })}
        </div>
      </div>
      <p className="text-[#001F3F] text-[20px]">{description}</p>
    </div>
  );
};

export default SingleReview;
