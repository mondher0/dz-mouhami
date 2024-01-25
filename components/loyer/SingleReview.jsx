import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const SingleReview = ({ review }) => {
  const stars = Array(review.stars).fill(0);
  return (
    <div className="flex items-start gap-5 flex-col rounded-xl bg-white  shadow-md p-6 w-full">
      <div className="flex items-center gap-5">
        <div>
          <Image src={review.user.image} width={60} height={60} alt="user" />
        </div>
        <p className="text-[#001F3F] text-[20px] font-bold">
          {review.user.name}
        </p>
        <div className="flex items-center gap-1">
          {stars.map((data) => {
            return <FaStar size={20} color="#FFC700" />;
          })}
        </div>
      </div>
      <p className="text-[#001F3F] text-[20px]">{review.comment}</p>
    </div>
  );
};

export default SingleReview;
