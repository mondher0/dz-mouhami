import React from "react";
import SingleReview from "./SingleReview";

const Reviews = ({ reviews }) => {
  return (
    <div className="flex flex-col items-start gap-5 w-full mt-5">
      {reviews.map((data, index) => {
        return <SingleReview review={data} key={index} />;
      })}
    </div>
  );
};

export default Reviews;
