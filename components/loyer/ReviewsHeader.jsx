import React from "react";
import { FaStar } from "react-icons/fa";
import "./index.css";

const ReviewsHeader = ({ reviews }) => {
  const dummyData = ["1", "2", "3", "4", "5"];
  return (
    <div className="flex items-start justify-between">
      <h1 className="text-[42px] text-[#FFC700] font-bold">Reviews : </h1>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-5">
          <FaStar size={50} color="#FFC700" />
          <p className="text-[#001F3FB2] text-[30px]">
            <span className="text-[#001F3F] text-[60px] font-bold">3.7</span>/5
          </p>
        </div>
        <p className="text-[#001F3F85] text-[20px]">
          total reviews ({reviews?.length})
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {dummyData.map((data) => {
          return (
            <div className="flex items-center gap-4">
              <progress
                className="w-[300px] h-[15px] rounded-[50px] bg-red-500"
                value="70"
                max="100"
              ></progress>
              <div className="flex items-center">
                <p className="text-[#001F3FD4] text-[30px] font-bold">{data}</p>
                <FaStar color="#FFC700" size={30} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewsHeader;
