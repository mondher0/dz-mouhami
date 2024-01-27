"use client";
import { FaStar } from "react-icons/fa";
import SingleReview from "../loyer/SingleReview";
import Link from "next/link";
import PostReview from "./PostReview";

const ReviewsLoyer = ({ lowyerReviews, id }) => {
  const dummyData = ["1", "2", "3", "4", "5"];
  return (
    <section id="reviews" className="p-10">
      <h1 className="text-[#FFC700] text-[40px] font-bold">Reviews</h1>
      <div className="flex items-center justify-evenly">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-5">
            <FaStar size={50} color="#FFC700" />
            <p className="text-[#001F3FB2] text-[30px]">
              <span className="text-[#001F3F] text-[60px] font-bold">3.7</span>
              /5
            </p>
          </div>
          <p className="text-[#001F3F85] text-[20px]">total reviews (60)</p>
        </div>
        <div className="flex flex-col gap-3">
          {dummyData.map((data, index) => {
            return (
              <div className="flex items-center gap-4" key={index}>
                <progress
                  className="w-[300px] h-[15px] rounded-[50px] bg-red-500"
                  value="70"
                  max="100"
                ></progress>
                <div className="flex items-center">
                  <p className="text-[#001F3FD4] text-[30px] font-bold">
                    {data}
                  </p>
                  <FaStar color="#FFC700" size={30} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <p className="text-[#001F3F] text-[30px] font-semibold">Comments</p>
      <div className="flex flex-col items-start gap-5 w-full mt-5">
        {lowyerReviews.map((data, index) => {
          return <SingleReview review={data} key={index} />;
        })}
      </div>
      <div className="flex items-center justify-center mt-5">
        <Link href="/" className="text-[#0066CC] font-bold">
          Read more
        </Link>
      </div>
      <PostReview id={id} />
    </section>
  );
};

export default ReviewsLoyer;
