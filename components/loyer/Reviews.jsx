import React from "react";
import SingleReview from "./SingleReview";

const Reviews = () => {
  const dummyData = [
    {
      id: 1,
      stars: 4,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus.",
      user: {
        id: 1,
        name: "Amina",
        image: "/assets/user.svg",
      },
    },
    {
      id: 1,
      stars: 4,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus.",
      user: {
        id: 1,
        name: "Amina",
        image: "/assets/user.svg",
      },
    },
  ];
  return (
    <div className="flex flex-col items-start gap-5 w-full mt-5">
      {dummyData.map((data) => {
        return <SingleReview review={data} />;
      })}
    </div>
  );
};

export default Reviews;
